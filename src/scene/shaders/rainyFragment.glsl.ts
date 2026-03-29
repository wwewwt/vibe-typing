export const rainyVertexShader = /* glsl */ `
in vec3 position;
in vec2 uv;
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

export const rainyFragmentShader = /* glsl */ `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uPrecipitation;
uniform float uBlur;
uniform sampler2D uBackgroundTexture;

in vec2 vUv;
out vec4 fragColor;

#define S(a, b, t) smoothstep(a, b, t)

vec3 N13(float p) {
  vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.11369, 0.13787));
  p3 += dot(p3, p3.yzx + 19.19);
  return fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float N(float t) {
  return fract(sin(t * 12345.564) * 7658.76);
}

float Saw(float b, float t) {
  return S(0.0, b, t) * S(1.0, b, t);
}

float StaticDrops(vec2 uv, float t) {
  uv *= 40.0;
  vec2 id = floor(uv);
  uv = fract(uv) - 0.5;
  vec3 n = N13(id.x * 107.45 + id.y * 3543.654);
  vec2 p = (n.xy - 0.5) * 0.7;
  float d = length(uv - p);
  float fade = Saw(0.025, fract(t + n.z));
  float c = S(0.3, 0.0, d) * fract(n.z * 10.0) * fade;
  return c;
}

vec2 DropLayer(vec2 uv, float t) {
  vec2 UV = uv;
  uv.y += t * 0.75;
  vec2 a = vec2(6.0, 1.0);
  vec2 grid = a * 2.0;
  vec2 id = floor(uv * grid);

  float colShift = N(id.x);
  uv.y += colShift;

  id = floor(uv * grid);
  vec3 n = N13(id.x * 35.2 + id.y * 2376.1);
  vec2 st = fract(uv * grid) - vec2(0.5, 0.0);

  float x = n.x - 0.5;
  float y = UV.y * 20.0;
  float wiggle = sin(y + sin(y));
  x += wiggle * (0.5 - abs(x)) * (n.z - 0.5);
  x *= 0.7;
  float ti = fract(t + n.z);
  y = (Saw(0.85, ti) - 0.5) * 0.9 + 0.5;
  vec2 p = vec2(x, y);

  float d = length((st - p) * a.yx);
  float mainDrop = S(0.4, 0.0, d);

  float r = sqrt(S(1.0, y, st.y));
  float cd = abs(st.x - x);
  float trail = S(0.23 * r, 0.15 * r * r, cd);
  float trailFront = S(-0.02, 0.02, st.y - y);
  trail *= trailFront * r * r;

  y = UV.y;
  float trail2 = S(0.2 * r, 0.0, cd);
  float droplets = max(0.0, (sin(y * (1.0 - y) * 120.0) - st.y)) * trail2 * trailFront * n.z;
  y = fract(y * 10.0) + (st.y - 0.5);
  float dd = length(st - vec2(x, y));
  droplets = S(0.3, 0.0, dd);
  float m = mainDrop + droplets * r * trailFront;

  return vec2(m, trail);
}

vec2 Drops(vec2 uv, float t, float l0, float l1, float l2) {
  float s = StaticDrops(uv, t) * l0;
  vec2 m1 = DropLayer(uv, t) * l1;
  vec2 m2 = DropLayer(uv * 1.85, t) * l2;

  float c = s + m1.x + m2.x;
  c = S(0.3, 1.0, c);

  return vec2(c, max(m1.y * l0, m2.y * l1));
}

void main() {
  vec2 uv = vUv;
  vec2 centeredUv = (uv - 0.5) * 2.0;

  float aspect = uResolution.y > 0.0 ? uResolution.x / uResolution.y : 1.0;
  centeredUv.x *= aspect;

  float t = uTime * 0.2;
  float rainStrength = clamp(uPrecipitation, 0.0, 1.0);

  vec2 rainUv = uv * vec2(aspect, 1.0);

  float staticDrops = S(-0.45, 1.0, rainStrength) * 2.35;
  float layer1 = S(0.18, 0.78, rainStrength);
  float layer2 = S(-0.05, 0.42, rainStrength);

  vec2 c = Drops(rainUv, t, staticDrops, layer1, layer2);

  vec2 e = vec2(0.001, 0.0);
  float cx = Drops(rainUv + e, t, staticDrops, layer1, layer2).x;
  float cy = Drops(rainUv + e.yx, t, staticDrops, layer1, layer2).x;
  vec2 n = vec2(cx - c.x, cy - c.x);

  float heightFade = mix(0.56, 1.0, S(-0.75, 0.55, centeredUv.y));
  vec3 col = texture(uBackgroundTexture, clamp(uv + n * heightFade, vec2(0.001), vec2(0.999))).rgb;
  vec3 blurredCol = textureLod(uBackgroundTexture, clamp(uv, vec2(0.001), vec2(0.999)), 1.5 + uBlur * 4.0).rgb;
  col = mix(col, blurredCol, uBlur * 0.42);

  // 冷色调色：减弱压暗力度，对齐 snow winterTint 的中性区间
  vec3 daytimeTint = vec3(0.90, 0.94, 1.0);
  col = mix(col, col * daytimeTint, 0.25);
  // 去饱和：保留大部分原色，轻微收敛饱和度
  col = mix(vec3(dot(col, vec3(0.299, 0.587, 0.114))), col, 0.92);

  vec3 lightDir = normalize(vec3(-1.0, 1.0, 0.5));
  float spec = max(0.0, dot(normalize(vec3(n, 0.05)), lightDir));
  col += pow(spec, 30.0) * 0.5 * S(0.1, 0.5, c.x);

  float grain = fract(sin(dot(uv + t * 0.01, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * 0.03;

  // 边缘暗角：保留底色亮度，避免边缘压黑（对齐 snow vignette 处理）
  float vignette = 1.0 - length(centeredUv * 0.5);
  float vignetteMask = S(0.0, 1.0, vignette);
  col *= mix(0.82, 1.0, vignetteMask);

  fragColor = vec4(col, 1.0);
}
`;
