<script>
  // @ts-nocheck

  import * as THREE from "three";
  import { onMount } from "svelte";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";

  let scene, camera, renderer, model, controls;

  onMount(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(5, 3, 5);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set background to white
    renderer.setClearColor(0xffffff);

    document.body.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Soft global lighting
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5).normalize(); // Strong directional light
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Point light close to the model
    pointLight.position.set(0, 2, 5);
    scene.add(pointLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const environmentMap = cubeTextureLoader.load([
      "/textures/px.png",
      "/textures/nx.png",
      "/textures/py.png",
      "/textures/ny.png",
      "/textures/pz.png",
      "/textures/nz.png",
    ]);

    scene.environment = environmentMap;
    scene.background = environmentMap;

    const loader = new GLTFLoader();
    loader.load("/toaster.glb", (gltf) => {
      model = gltf.scene;

      model.traverse((node) => {
        if (node.isMesh) {
          node.material.envMap = environmentMap;
          node.material.needsUpdate = true;
        }
      });

      scene.add(model);
    });

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    function animate() {
      requestAnimationFrame(animate);

      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    return () => {
      document.body.removeChild(renderer.domElement);
      renderer.dispose();
    };
  });
</script>

<main></main>

<style>
</style>
