import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { earthRev, earthToSun, jupRev, jupToSun, marsRev, marsToSun, mercRev, mercToSun, nepRev, nepToSun, satRev, satToSun, uraRev, uraToSun, venRev, venToSun } from './distanceToSun';

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
const gridHelper = new THREE.GridHelper(10000, 100);
scene.add(lightHelper, gridHelper);
// scene.add(lightHelper);


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

const earthTexture = new THREE.TextureLoader().load('earth.jpg');

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 12, 12),
  new THREE.MeshStandardMaterial({
    map: earthTexture
  })
);

earth.position.set(0, 0, 102);

scene.add(earth);

const marsTexture = new THREE.TextureLoader().load('mars.jpg');

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(50, 300, 20),
  new THREE.MeshStandardMaterial({
    map: marsTexture
  })
);

mars.position.set(0, 0, 102);

scene.add(mars);

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(50, 300, 20),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture
  })
);

jupiter.position.set(0, 0, 102);

scene.add(jupiter);

const saturnTexture = new THREE.TextureLoader().load('saturn.jpg');

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(50, 300, 20),
  new THREE.MeshStandardMaterial({
    map: saturnTexture
  })
);

saturn.position.set(0, 0, 102);

scene.add(saturn);

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(50, 300, 20),
  new THREE.MeshStandardMaterial({
    map: uranusTexture
  })
);

uranus.position.set(0, 0, 102);

scene.add(uranus);

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(50, 300, 20),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture
  })
);

neptune.position.set(0, 0, 102);

scene.add(neptune);

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

function calculateDistanceAndRevoSin(revolution, distance) {
  return Math.sin(Date.now() * revolution) * distance;
}

function calculateDistanceAndRevoCos(revolution, distance) {
  return Math.cos(Date.now() * revolution) * distance;
}

function animate() {
  requestAnimationFrame(animate);

  sun.rotation.x += 0.001;
  sun.rotation.y += 0.001;

  var mercuryRevolution = 0.0001;
  var mercuryDistance = 219.15;

  var mercuryX = calculateDistanceAndRevoSin(mercuryRevolution, mercuryDistance);
  var mercuryZ = calculateDistanceAndRevoCos(mercuryRevolution, mercuryDistance);

  mercury.rotation.y = Date.now() * -0.00001; // 88 days
  mercury.position.x = mercuryX; // 88 days
  mercury.position.z = mercuryZ; // 88 days

  venus.rotation.y = Date.now() * -0.00001;
  venus.position.x = calculateDistanceAndRevoSin(((mercRev / venRev) * mercuryRevolution), ((venToSun / mercToSun) * mercuryDistance));
  venus.position.z = calculateDistanceAndRevoCos(((mercRev / venRev) * mercuryRevolution), ((venToSun / mercToSun) * mercuryDistance));

  earth.rotation.y = Date.now() * -0.00001;
  earth.position.x = calculateDistanceAndRevoSin(((mercRev / earthRev) * mercuryRevolution), ((earthToSun / mercToSun) * mercuryDistance));
  earth.position.z = calculateDistanceAndRevoCos(((mercRev / earthRev) * mercuryRevolution), ((earthToSun / mercToSun) * mercuryDistance));

  mars.rotation.y = Date.now() * -0.00001;
  mars.position.x = calculateDistanceAndRevoSin(((mercRev / marsRev) * mercuryRevolution), ((marsToSun / mercToSun) * mercuryDistance));
  mars.position.z = calculateDistanceAndRevoCos(((mercRev / marsRev) * mercuryRevolution), ((marsToSun / mercToSun) * mercuryDistance));

  jupiter.rotation.y = Date.now() * -0.00001;
  jupiter.position.x = calculateDistanceAndRevoSin(((mercRev / jupRev) * mercuryRevolution), ((jupToSun / mercToSun) * mercuryDistance));
  jupiter.position.z = calculateDistanceAndRevoCos(((mercRev / jupRev) * mercuryRevolution), ((jupToSun / mercToSun) * mercuryDistance));

  saturn.rotation.y = Date.now() * -0.00001;
  saturn.position.x = calculateDistanceAndRevoSin(((mercRev / satRev) * mercuryRevolution), ((satToSun / mercToSun) * mercuryDistance));
  saturn.position.z = calculateDistanceAndRevoCos(((mercRev / satRev) * mercuryRevolution), ((satToSun / mercToSun) * mercuryDistance));

  uranus.rotation.y = Date.now() * -0.00001;
  uranus.position.x = calculateDistanceAndRevoSin(((mercRev / uraRev) * mercuryRevolution), ((uraToSun / mercToSun) * mercuryDistance));
  uranus.position.z = calculateDistanceAndRevoCos(((mercRev / uraRev) * mercuryRevolution), ((uraToSun / mercToSun) * mercuryDistance));

  neptune.rotation.y = Date.now() * -0.00001;
  neptune.position.x = calculateDistanceAndRevoSin(((mercRev / nepRev) * mercuryRevolution), ((nepToSun / mercToSun) * mercuryDistance));
  neptune.position.z = calculateDistanceAndRevoCos(((mercRev / nepRev) * mercuryRevolution), ((nepToSun / mercToSun) * mercuryDistance));

  controls.update;

  renderer.render(scene, camera);
}

animate();