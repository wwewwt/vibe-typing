import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { createWeatherMaterial, getWeatherMaterialLabel } from './materials/WeatherMaterial'
import { useSceneUniforms } from './hooks/useSceneUniforms'

const backdropImageUrl = 'https://raw.githubusercontent.com/hcicilee-stack/FlowSpace/main/2dbb18289514a179f8c3f9845bde16c7.jpg'

function createBackdropTexture() {
  const size = 1200

  if (typeof document === 'undefined') {
    const data = new Uint8Array(size * size * 4)
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 32
      data[i + 1] = 44
      data[i + 2] = 60
      data[i + 3] = 255
    }
    const fallback = new THREE.DataTexture(data, size, size, THREE.RGBAFormat)
    fallback.wrapS = THREE.ClampToEdgeWrapping
    fallback.wrapT = THREE.ClampToEdgeWrapping
    fallback.generateMipmaps = true
    fallback.minFilter = THREE.LinearMipmapLinearFilter
    fallback.magFilter = THREE.LinearFilter
    fallback.colorSpace = THREE.SRGBColorSpace
    fallback.needsUpdate = true
    return fallback
  }

  let seed = 93751
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0
    return seed / 4294967296
  }

  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')

  if (!context) {
    const data = new Uint8Array(size * size * 4)
    const fallback = new THREE.DataTexture(data, size, size, THREE.RGBAFormat)
    fallback.wrapS = THREE.ClampToEdgeWrapping
    fallback.wrapT = THREE.ClampToEdgeWrapping
    fallback.generateMipmaps = true
    fallback.minFilter = THREE.LinearMipmapLinearFilter
    fallback.magFilter = THREE.LinearFilter
    fallback.colorSpace = THREE.SRGBColorSpace
    fallback.needsUpdate = true
    return fallback
  }

  const backgroundGradient = context.createLinearGradient(0, 0, 0, size)
  backgroundGradient.addColorStop(0, '#1b1d24')
  backgroundGradient.addColorStop(0.42, '#2b2f3b')
  backgroundGradient.addColorStop(1, '#666b74')
  context.fillStyle = backgroundGradient
  context.fillRect(0, 0, size, size)

  for (let i = 0; i < 11; i += 1) {
    const x = size * (0.06 + rand() * 0.88)
    const width = size * (0.03 + rand() * 0.06)
    const alpha = 0.06 + rand() * 0.14
    context.fillStyle = `rgba(245, 248, 255, ${alpha.toFixed(3)})`
    context.fillRect(x, 0, width, size)
  }

  const blobs = [
    { x: 0.2, y: 0.38, r: 0.22, c: 'rgba(192, 142, 94, 0.46)' },
    { x: 0.72, y: 0.3, r: 0.26, c: 'rgba(152, 168, 190, 0.36)' },
    { x: 0.55, y: 0.68, r: 0.33, c: 'rgba(110, 126, 162, 0.44)' },
    { x: 0.18, y: 0.82, r: 0.18, c: 'rgba(102, 116, 88, 0.35)' },
    { x: 0.8, y: 0.78, r: 0.21, c: 'rgba(86, 99, 114, 0.35)' }
  ]

  for (const blob of blobs) {
    const radial = context.createRadialGradient(
      size * blob.x,
      size * blob.y,
      0,
      size * blob.x,
      size * blob.y,
      size * blob.r
    )
    radial.addColorStop(0, blob.c)
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)')
    context.fillStyle = radial
    context.beginPath()
    context.arc(size * blob.x, size * blob.y, size * blob.r, 0, Math.PI * 2)
    context.fill()
  }

  for (let i = 0; i < 22; i += 1) {
    const x = size * rand()
    const y = size * (0.18 + rand() * 0.7)
    const radius = size * (0.01 + rand() * 0.05)
    const bloom = context.createRadialGradient(x, y, 0, x, y, radius)
    const alpha = 0.05 + rand() * 0.1
    bloom.addColorStop(0, `rgba(255, 248, 230, ${alpha.toFixed(3)})`)
    bloom.addColorStop(1, 'rgba(255, 248, 230, 0)')
    context.fillStyle = bloom
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
  }

  context.filter = 'blur(30px)'
  context.drawImage(canvas, 0, 0)
  context.filter = 'none'

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping
  texture.generateMipmaps = true
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true

  return texture
}

export function SceneRoot() {
  const shaderState = useSceneUniforms()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const shaderUniforms = useMemo(() => {
    const backgroundTexture = createBackdropTexture()

    return {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uPrecipitation: { value: shaderState.precipitationValue },
      uBlur: { value: shaderState.blurValue },
      uBackgroundTexture: { value: backgroundTexture }
    }
  }, []) as Record<string, THREE.IUniform>

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const hasWebGLRuntime =
      typeof window !== 'undefined' &&
      typeof window.WebGLRenderingContext !== 'undefined'

    if (!hasWebGLRuntime) {
      shaderUniforms.uPrecipitation.value = shaderState.precipitationValue
      shaderUniforms.uBlur.value = shaderState.blurValue
      return
    }

    const context = canvas.getContext('webgl2') || canvas.getContext('webgl')

    if (!context) {
      shaderUniforms.uPrecipitation.value = shaderState.precipitationValue
      shaderUniforms.uBlur.value = shaderState.blurValue
      return
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      context: context as WebGLRenderingContext,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    })
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = createWeatherMaterial(shaderState.mode, shaderUniforms)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    const loader = new THREE.TextureLoader()
    loader.setCrossOrigin('anonymous')
    let disposed = false

    let animationFrame = 0
    const clock = new THREE.Clock()

    loader.load(
      backdropImageUrl,
      (texture) => {
        if (disposed) {
          texture.dispose()
          return
        }

        texture.wrapS = THREE.ClampToEdgeWrapping
        texture.wrapT = THREE.ClampToEdgeWrapping
        texture.generateMipmaps = true
        texture.minFilter = THREE.LinearMipmapLinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.colorSpace = THREE.SRGBColorSpace
        shaderUniforms.uBackgroundTexture.value.dispose()
        shaderUniforms.uBackgroundTexture.value = texture
      },
      undefined,
      () => {
        // Keep the fallback backdrop when the remote image cannot be loaded.
      }
    )

    const resize = () => {
      const width = canvas.clientWidth || window.innerWidth
      const height = canvas.clientHeight || window.innerHeight
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      renderer.setSize(width, height, false)
      shaderUniforms.uResolution.value.set(width, height)
    }

    const renderFrame = () => {
      shaderUniforms.uTime.value = clock.getElapsedTime()
      shaderUniforms.uPrecipitation.value = shaderState.precipitationValue
      shaderUniforms.uBlur.value = shaderState.blurValue
      renderer.render(scene, camera)
      animationFrame = window.requestAnimationFrame(renderFrame)
    }

    resize()
    renderFrame()
    window.addEventListener('resize', resize)

    return () => {
      disposed = true
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      shaderUniforms.uBackgroundTexture.value.dispose()
      renderer.dispose()
    }
  }, [shaderState.blurValue, shaderState.mode, shaderState.precipitationValue, shaderUniforms])

  return (
    <div
      data-testid="ambient-canvas"
      data-mode={shaderState.mode}
      data-precipitation={shaderState.precipitationAmount}
      data-blur={shaderState.blur}
      data-material={getWeatherMaterialLabel(shaderState.mode)}
      data-renderer="shader"
      data-shader={shaderState.mode}
      data-preset={shaderState.mode === 'rain' ? 'rain-glass' : 'snow-drift'}
      className="absolute inset-0"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
