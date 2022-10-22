import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export class ThreeInstance {
	constructor(canvas) {
		this.canvas = window.document.getElementById(canvas);
	}

	init() {
		const scene = new THREE.Scene();

		// ON RESIZE
		const size = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		// CAMERA
		const camera = new THREE.PerspectiveCamera(
			45,
			size.width / size.height,
			0.1,
			60
		);
		camera.position.set(6, 0, 0);

		// WINDOW RESIZE
		document.addEventListener('resize', () => {
			size.width = window.innerWidth;
			size.height = window.innerHeight;
			camera.aspect = size.width / size.height;
			camera.updateProjectionMatrix();

			renderer.setSize(size.width, size.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		// OBJECT - WORLD
		const worldTexture = new THREE.TextureLoader().load(
			'/images/small-world.jpg'
		);

		const worldGeometry = new THREE.SphereGeometry(1, 40, 40);
		const worldMaterial = new THREE.MeshBasicMaterial({
			map: worldTexture,
		});
		const world = new THREE.Mesh(worldGeometry, worldMaterial);
		scene.add(world);
		// OBJECT - CLOUD
		const cloudTexture = new THREE.TextureLoader().load('/images/clouds.png');

		const cloudGeometry = new THREE.SphereGeometry(1.01, 40, 40);
		const cloudMaterial = new THREE.MeshBasicMaterial({
			map: cloudTexture,
			transparent: true,
		});
		const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
		scene.add(cloud);

		// RENDERER

		const renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
			alpha: true,
		});
		renderer.setSize(size.width, size.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// CONTROLS
		const controls = new OrbitControls(camera, this.canvas);
		controls.enableDamping = true;
		controls.enableZoom = false;

		// TICK
		const tick = () => {
			world.rotation.y += 0.0005;

			cloud.rotation.y -= 0.001;
			controls.update();
			renderer.render(scene, camera);
			window.requestAnimationFrame(tick);
		};
		tick();
	}
}
