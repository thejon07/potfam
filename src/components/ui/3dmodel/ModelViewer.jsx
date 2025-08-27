"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function AnimatedNikeModel() {
    const mountRef = useRef(null);

    useEffect(() => {
        // === Scene Setup ===
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);

        const camera = new THREE.PerspectiveCamera(
            45,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 1, 1.5);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // === Lights ===
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        // 2. Directional light (like sunlight)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);

        // 3. Spot light (to highlight the shoe)
        const spotLight = new THREE.SpotLight(0xffffff, 0.5);
        spotLight.position.set(-5, 10, 5);
        spotLight.angle = Math.PI / 6;
        scene.add(spotLight);

        // 4. Point light (like a lamp or bulb)
        const pointLight = new THREE.PointLight(0xffffff, 0.3, 50);
        pointLight.position.set(0, 5, 10);
        scene.add(pointLight);

        // === Controls ===
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // === Load GLTF Model ===
        const loader = new GLTFLoader();
        let mixer;
        loader.load(
            "/nike-shoe-unbox.glb",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(1, 1, 1); // Adjust size
                scene.add(model);

                // === Setup Animations ===
                if (gltf.animations && gltf.animations.length) {
                    mixer = new THREE.AnimationMixer(model);
                    gltf.animations.forEach((clip) => {
                        mixer.clipAction(clip).play();
                    });
                }
            },
            undefined,
            (error) => console.error("Error loading model:", error)
        );

        // === Clock for animations ===
        const clock = new THREE.Clock();

        // === Animate loop ===
        const animate = () => {
            requestAnimationFrame(animate);

            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);

            // Optional: auto-rotate model if no animations
            if (!mixer) scene.rotation.y += 0.01;

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // === Handle resize ===
        const handleResize = () => {
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };
        window.addEventListener("resize", handleResize);

        // === Cleanup on unmount ===
        return () => {
            window.removeEventListener("resize", handleResize);
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />;
}
