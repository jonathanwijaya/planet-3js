import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 30000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(300);
camera.position.setY(250);
camera.position.setX(100);
renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3, 32, 32);

const ambientLight = new THREE.AmbientLight(0xfffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(1000, 100);
// scene.add(lightHelper, gridHelper);
scene.add(lightHelper);


const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xfffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(3000));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(10000).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

const sunTexture = new THREE.TextureLoader().load('sun.jpg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(50, 300, 20),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
  })
);


scene.add(sun);

const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg');

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(1, 12, 12),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture
  })
);

mercury.position.set(0, 0, 102);

scene.add(mercury);

const venusTexture = new THREE.TextureLoader().load('venus.jpg');

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 12, 12),
  new THREE.MeshStandardMaterial({
    map: venusTexture
  })
);

venus.position.set(0, 0, 102);

scene.add(venus);


// const moonTexture = new THREE.TextureLoader().load('moon.jpg');

// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(1, 1, 1),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//   })
// );

// moon.position.set(0, 0, 20);

// scene.add(moon);

// function zoomIn() {
//   console.log('masuk');
//   controls.moveForward;
// }

function animate() {
  requestAnimationFrame(animate);

  sun.rotation.x += 0.0001;
  sun.rotation.y += 0.0001;

  mercury.rotation.y = Date.now() * -0.0001;
  mercury.position.x = Math.sin(Date.now() * 0.001) * 219.15;
  mercury.position.z = Math.cos(Date.now() * 0.001) * 219.15;

  venus.rotation.y = Date.now() * -0.0001;
  venus.position.x = Math.sin(Date.now() * 0.001) * 300;
  venus.position.z = Math.cos(Date.now() * 0.001) * 300;

  // document.addEventListener("mousedown", zoomIn);

  controls.update;

  renderer.render(scene, camera);
}

animate();