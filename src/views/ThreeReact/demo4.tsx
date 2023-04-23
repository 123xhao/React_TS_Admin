import {shaderMaterial, Sparkles,Center,useGLTF, OrbitControls, useTexture} from "@react-three/drei";

import * as THREE from 'three'
import {extend} from "@react-three/fiber";


export default function Demo(){
    const { nodes }=useGLTF<any>('/src/assets/three3D/portal-2.glb')
    const backTexture=useTexture('/src/assets/baked-02.jpeg')
    // const PortalMaterial=shaderMaterial({
    //     uTime:0,
    //     uColorStart:new THREE.Color('#ffffff'),
    //     uColorEnd:new THREE.Color('#000000')
    // })
    // extend({PortalMaterial})
    // backTexture.flipY=false
    console.log(nodes)
    return(
        <>
            <color args={['#201919']} attach='background'/>
            <OrbitControls/>
            <Center>
                <mesh  geometry={nodes.baked.geometry}>
                    <meshBasicMaterial map={backTexture} map-flipY={false}/>
                </mesh>
                <mesh
                    geometry={nodes.lampLightL.geometry}
                    material-color="#f0bf94"
                    position={[-0.19,0.72,1.32]}
                    scale={[0.07, 0.11, 0.07]}
                />
                <mesh
                    geometry={nodes.lampLightR.geometry}
                    material-color="#f0bf94"
                    position={[-2.055,0.726,1.07]}
                    scale={[-0.07, 0.11, 0.07]}
                />
                <mesh geometry={nodes.portalCircle.geometry} position={[-1.35, 0.50, 2.9]} rotation={[-Math.PI / 2, 0, -0.15]}>
                    {/*<portalMaterial  colorStart="pink" colorEnd="white" />*/}
                </mesh>
                {/*<mesh*/}
                {/*    geometry={nodes.lampLightL.geometry}*/}
                {/*    position={[-0.19,0.72,1.32]}*/}
                {/*    scale={nodes.lampLightL.scale}*/}
                {/*/>*/}
                {/*<mesh*/}
                {/*    geometry={nodes.lampLightR.geometry}*/}
                {/*    position={[-2.055,0.726,1.07]}*/}
                {/*    scale={nodes.lampLightL.scale}*/}
                {/*>*/}
                    <meshBasicMaterial color='#ffffe5'/>
                {/*</mesh>*/}
                <Sparkles speed={0.2} count={40} size={6} scale={[4,2,4]} position={[-0.9,1,0.6]}/>
            </Center>
        </>
    )
}
