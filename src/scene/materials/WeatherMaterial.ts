import * as THREE from 'three'
import { rainyFragmentShader, rainyVertexShader } from '../shaders/rainyFragment.glsl'
import { snowyFragmentShader } from '../shaders/snowyFragment.glsl'
import type { AppMode } from '../../types/app'

export const weatherVertexShader = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

export function getWeatherMaterialLabel(mode: AppMode) {
  return mode === 'snow' ? 'SnowField' : 'RainField'
}

export function createWeatherMaterial(mode: AppMode, uniforms: Record<string, THREE.IUniform>) {
  if (mode === 'rain') {
    return new THREE.RawShaderMaterial({
      uniforms,
      glslVersion: THREE.GLSL3,
      vertexShader: rainyVertexShader,
      fragmentShader: rainyFragmentShader
    })
  }

  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader: weatherVertexShader,
    fragmentShader: snowyFragmentShader
  })
}
