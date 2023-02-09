<script setup lang="ts">
import * as THREE from 'three'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'

const container = ref<HTMLElement | null>(null)
const params = {
  projection: 'normal',
  autoRotate: true,
  reflectivity: 1,
  background: false,
  exposure: 1,
  gemColor: 'Green'
}
let camera: { position: { set: (arg0: number, arg1: number, arg2: number) => void }; aspect: number; updateProjectionMatrix: () => void; lookAt: (arg0: any) => void }, scene: { background: any; add: (arg0: any) => void; position: any }, renderer: { setPixelRatio: (arg0: number) => void; setSize: (arg0: number, arg1: number) => void; shadowMap: { enabled: boolean }; toneMapping: any; domElement: any; outputEncoding: any; toneMappingExposure: number; render: (arg0: any, arg1: any) => void }
let gemBackMaterial: { envMap: any; needsUpdate: boolean; reflectivity: number; color: any } | undefined, gemFrontMaterial: { envMap: any; needsUpdate: boolean; reflectivity: number; color: any } | undefined

const objects: any[] = []

onMounted(() => {
  init()
  animate()
})

function init () {
  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.set(0.0, -10, 20 * 3.5)

  scene = new THREE.Scene()
  scene.background = null
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

  gemBackMaterial = new THREE.MeshPhysicalMaterial({
    map: null,
    color: 0x0000FF,
    metalness: 1,
    roughness: 0,
    opacity: 0.5,
    side: THREE.BackSide,
    transparent: true,
    envMapIntensity: 5,
    premultipliedAlpha: true
    // TODO: Add custom blend mode that modulates background color by this materials color.
  })

  gemFrontMaterial = new THREE.MeshPhysicalMaterial({
    map: null,
    color: 0x0000FF,
    metalness: 0,
    roughness: 0,
    opacity: 0.25,
    side: THREE.FrontSide,
    transparent: true,
    envMapIntensity: 10,
    premultipliedAlpha: true
  })

  const loader = new OBJLoader()
  loader.load('/model/emerald.obj', function (object: { traverse: (arg0: (child: any) => void) => void }) {
    object.traverse(function (child: { material: any; clone: () => any }) {
      if (child instanceof THREE.Mesh) {
        child.material = gemBackMaterial
        const second = child.clone()
        second.material = gemFrontMaterial

        const parent = new THREE.Group()
        parent.add(second)
        parent.add(child)
        scene.add(parent)

        objects.push(parent)
      }
    })
  })

  new RGBELoader()
    .setPath('/model/')
    .load('royal_esplanade_1k.hdr', function (texture: { mapping: any }) {
      texture.mapping = THREE.EquirectangularReflectionMapping
      gemFrontMaterial!.envMap = gemBackMaterial!.envMap = texture
      gemFrontMaterial!.needsUpdate = gemBackMaterial!.needsUpdate = true
    })

  scene.add(new THREE.AmbientLight(0x222222))

  const pointLight1 = new THREE.PointLight(0xFFFFFF)
  pointLight1.position.set(150, 10, 0)
  pointLight1.castShadow = false
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(0xFFFFFF)
  pointLight2.position.set(-150, 0, 0)
  scene.add(pointLight2)

  const pointLight3 = new THREE.PointLight(0xFFFFFF)
  pointLight3.position.set(0, -10, -150)
  scene.add(pointLight3)

  const pointLight4 = new THREE.PointLight(0xFFFFFF)
  pointLight4.position.set(0, 0, 150)
  scene.add(pointLight4)

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
  renderer.shadowMap.enabled = true
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  container.value!.appendChild(renderer.domElement)
  renderer.outputEncoding = THREE.sRGBEncoding

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 20
  controls.maxDistance = 200

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize () {
  const width = window.innerWidth / 2
  const height = window.innerHeight / 2

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
}

function animate () {
  requestAnimationFrame(animate)

  render()
}

function render () {
  if (gemBackMaterial !== undefined && gemFrontMaterial !== undefined) {
    gemFrontMaterial.reflectivity = gemBackMaterial.reflectivity = params.reflectivity

    let newColor = gemBackMaterial.color
    switch (params.gemColor) {
      case 'Blue': newColor = new THREE.Color(0x000088); break
      case 'Red': newColor = new THREE.Color(0x880000); break
      case 'Green': newColor = new THREE.Color(0x008800); break
      case 'White': newColor = new THREE.Color(0x888888); break
      case 'Black': newColor = new THREE.Color(0x0F0F0F); break
    }

    gemBackMaterial.color = gemFrontMaterial.color = newColor
  }

  renderer.toneMappingExposure = params.exposure

  camera.lookAt(scene.position)

  if (params.autoRotate) {
    for (let i = 0, l = objects.length; i < l; i++) {
      const object = objects[i]
      object.rotation.y += 0.005
    }
  }

  renderer.render(scene, camera)
}
</script>

<template>
  <div ref="container" />
</template>

<style scoped>

</style>
