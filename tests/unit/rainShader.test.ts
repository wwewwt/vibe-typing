import { describe, expect, it } from 'vitest'
import * as THREE from 'three'
import { createWeatherMaterial } from '../../src/scene/materials/WeatherMaterial'
import { rainyFragmentShader } from '../../src/scene/shaders/rainyFragment.glsl'

describe('rainyFragmentShader', () => {
  it('adapts the wet-glass shadertoy structure with texture-driven refraction', () => {
    expect(rainyFragmentShader).toContain('mainImage')
    expect(rainyFragmentShader).toContain('iChannel0')
    expect(rainyFragmentShader).toContain('textureLod')
  })

  it('uses a raw GLSL3 material so the shadertoy-style shader compiles without injected headers', () => {
    const material = createWeatherMaterial('rain', {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uPrecipitation: { value: 0.5 },
      uBlur: { value: 0.5 },
      uBackgroundTexture: { value: new THREE.DataTexture(new Uint8Array(4), 1, 1, THREE.RGBAFormat) }
    })

    expect(material).toBeInstanceOf(THREE.RawShaderMaterial)
  })

  it('adds a rounded droplet body and highlight so rain reads like water beads', async () => {
    const shaders = await import('../../src/scene/shaders/rainyFragment.glsl')

    expect(shaders.rainyFragmentShader).toContain('dropletCore')
    expect(shaders.rainyFragmentShader).toContain('dropletHighlight')
    expect(shaders.rainyFragmentShader).toContain('dropletBody')
  })
})
