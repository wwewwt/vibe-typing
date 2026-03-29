export const snowyFragmentShader = /* glsl */ `
uniform vec2 uResolution;
uniform float uTime;
uniform float uPrecipitation;
uniform float uBlur;
uniform sampler2D uBackgroundTexture;
varying vec2 vUv;

#define S(a, b, t) smoothstep(a, b, t)
#define LAYERS 30
#define DEPTH 0.52
#define WIDTH 0.30
#define SPEED 0.62

void main() {
  const mat3 p = mat3(
    13.323122, 23.5112, 21.71123,
    21.1212, 28.7312, 11.9312,
    21.8112, 14.7212, 61.3934
  );

  vec2 uv = vUv;
  vec2 centeredUv = (uv - 0.5) * 2.0;
  float aspect = uResolution.y > 0.0 ? uResolution.x / uResolution.y : 1.0;
  centeredUv.x *= aspect;

  float intensity = clamp(uPrecipitation, 0.0, 1.0);
  vec2 snowUv = vec2(1.0, uResolution.y / max(uResolution.x, 1.0)) * uv;
  snowUv += vec2(sin(uTime * 0.07), cos(uTime * 0.05)) * 0.05 * intensity;

  vec3 acc = vec3(0.0);
  float dof = 5.0 * sin(uTime * 0.1);
  float visibleLayers = max(1.0, float(LAYERS) * intensity);

  for (int i = 0; i < LAYERS; i++) {
    float fi = float(i);
    if (fi > visibleLayers) {
      break;
    }

    vec2 q = snowUv * (1.0 + fi * DEPTH);
    q += vec2(
      q.y * (WIDTH * mod(fi * 7.238917, 1.0) - WIDTH * 0.5),
      SPEED * uTime / (1.0 + fi * DEPTH * 0.03)
    );

    vec3 n = vec3(floor(q), 31.189 + fi);
    vec3 m = floor(n) * 0.00001 + fract(n);
    vec3 mp = (31415.9 + m) / fract(p * m);
    vec3 r = fract(mp);
    vec2 s = abs(mod(q, 1.0) - 0.5 + 0.9 * r.xy - 0.45);
    s += 0.01 * abs(2.0 * fract(10.0 * q.yx) - 1.0);
    s *= mix(0.78, 1.08, fi / float(LAYERS - 1));

    float d = 0.6 * max(s.x - s.y, s.x + s.y) + max(s.x, s.y) - 0.01;
    float edge = 0.005 + 0.05 * min(0.5 * abs(fi - 5.0 - dof), 1.0);
    float flake = smoothstep(edge, -edge, d);
    float bigFlake = smoothstep(edge * 1.35, -edge * 1.35, d * 0.78);
    float nearBoost = S(7.0, 0.0, fi);
    flake = max(flake, bigFlake * nearBoost * 0.56);

    float layerWeight = r.x / (1.0 + 0.02 * fi * DEPTH);
    layerWeight *= mix(1.22, 0.84, fi / float(LAYERS - 1));
    acc += vec3(flake * layerWeight);
  }

  vec3 bg = texture2D(uBackgroundTexture, clamp(uv, vec2(0.001), vec2(0.999))).rgb;
  vec2 blurPx = vec2(1.0 / max(uResolution.x, 1.0), 1.0 / max(uResolution.y, 1.0)) * (1.5 + 3.5 * uBlur);
  vec3 bgSoft = bg * 0.5;
  bgSoft += texture2D(uBackgroundTexture, clamp(uv + blurPx * vec2(1.0, 1.0), vec2(0.001), vec2(0.999))).rgb * 0.25;
  bgSoft += texture2D(uBackgroundTexture, clamp(uv - blurPx * vec2(1.0, 1.0), vec2(0.001), vec2(0.999))).rgb * 0.25;
  vec3 color = mix(bg, bgSoft, 0.42 + uBlur * 0.18);

  vec3 winterTint = vec3(0.9, 0.94, 1.0);
  color = mix(color, color * winterTint, 0.28);

  float snowGain = mix(0.52, 0.98, intensity);
  color += acc * snowGain;

  float haze = S(1.2, 0.05, length(centeredUv * vec2(0.72, 0.58)));
  color += vec3(0.06, 0.09, 0.13) * haze * (0.08 + uBlur * 0.16);

  float vignette = 1.0 - length(centeredUv * 0.4);
  float vignetteMask = S(0.0, 1.0, vignette);
  color *= mix(0.78, 1.0, vignetteMask);

  gl_FragColor = vec4(color, 1.0);
}
`;
