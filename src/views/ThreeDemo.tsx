import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {ColorRepresentation} from "three";
import image from "../assets/earth.jpg";
const StarBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect((color?: ColorRepresentation) => {
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let renderer: THREE.WebGLRenderer;
        let starGeo: THREE.BufferGeometry;
        let starMaterial: THREE.Material;
        let stars: THREE.Points;
        let sphere: THREE.Mesh;

        const init = () => {
            // 初始化相机
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 4.5;
            // camera.rotation.x = Math.PI / 3;

            // 初始化场景
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0.1, 0.1, 0.1);

            // 初始化星星
            starGeo = new THREE.BufferGeometry();
            starMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
            });

            const starVertices = [];
            for (let i = 0; i < 10000; i++) {
                const x = (Math.random() - 0.5) * 2000;
                const y = (Math.random() - 0.5) * 2000;
                const z = -Math.random() * 1000;
                starVertices.push(x, y, z);
            }
            starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
            stars = new THREE.Points(starGeo, starMaterial);
            // 初始化球体
            const textureLoader=new THREE.TextureLoader()
            const texture= textureLoader.load(image,()=>{
                texture.wrapS = THREE.ClampToEdgeWrapping; // 设置水平方向不进行重复
                texture.wrapT = THREE.ClampToEdgeWrapping; // 设置竖直方向不进行重复
            })
            const geometry = new THREE.SphereGeometry( 2, 32, 16 );
            const material = new THREE.MeshBasicMaterial( { map: texture } );
            sphere = new THREE.Mesh( geometry, material );
            sphere.position.x=-1.5
            // 初始化渲染器
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // 将渲染器的输出添加到 DOM 中
            if (mountRef.current) {
                mountRef.current.appendChild(renderer.domElement);
            }
            // 将相机、星星添加到场景中
            scene.add(camera);
            scene.add(stars);
            scene.add(sphere);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            // 每一帧都旋转星星
            stars.rotation.z += 0.0001;
            // 每一帧都旋转地球
            sphere.rotation.z+=0.001
            sphere.rotation.y+=0.001
            sphere.rotation.x+=0.001
            renderer.render(scene, camera);
        };

        init();
        animate();

        // 组件销毁时清理渲染器
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);
    const bigBox={
        position:'relative',
        top:0,
        left:0,
        width:'100%',
        height:'100%'
    }
    return (
        <div style={bigBox}>
            <div ref={mountRef} ></div>
        </div>
    );
};

export default StarBackground;
