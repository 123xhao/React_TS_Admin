import React, {useEffect, useRef} from "react";
import * as THREE from 'three';
import image from '../assets/earth.jpg'
import haloImage from '../assets/aa.jpg'
const Demo:React.FC=()=>{
    const demoHTML=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let renderer: THREE.WebGLRenderer;
        let textureLoader:THREE.TextureLoader;
        let sphere:THREE.Mesh;
        const init=()=>{
            // 初始化相机
            camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000)
            // 初始化场景
            scene = new THREE.Scene();
            textureLoader=new THREE.TextureLoader()
            // 初始化球体
            const texture= textureLoader.load(image,()=>{
                texture.wrapS = THREE.ClampToEdgeWrapping; // 设置水平方向不进行重复
                texture.wrapT = THREE.ClampToEdgeWrapping; // 设置竖直方向不进行重复
                const geometry = new THREE.SphereGeometry( 3, 32, 16 );
                const material = new THREE.MeshBasicMaterial( { map: texture } );
                sphere = new THREE.Mesh( geometry, material );
                scene.add(sphere);
            })
            // 添加光晕
            const haloTexture = textureLoader.load(haloImage);
            const spriteMaterial  = new THREE.SpriteMaterial({
                map: haloTexture,
                opacity: 1,
                transparent: true,
            });
            const sprite  = new THREE.Sprite (spriteMaterial);
            sprite.scale.set( Math.PI/0.35, Math.PI/0.35, 1);
            scene.add(sprite);
            // 初始化渲染器
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            // 将渲染器的输出添加到 DOM 中
            if (demoHTML.current) {
                demoHTML.current.appendChild(renderer.domElement);
            }
            camera.position.z=5
        }
        const animate=()=>{
            requestAnimationFrame(animate)
            renderer.render(scene, camera);
        }
        init()
        animate()
        window.addEventListener('click',()=>{
            sphere.rotation.x+=1
            sphere.rotation.y+=1
        })


    },[])
    return(
        <div ref={demoHTML}></div>
    )
}
export default Demo
