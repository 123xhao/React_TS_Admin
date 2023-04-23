// import {useRef} from "react";
import {useThree} from "@react-three/fiber";
import {Sky,useAnimations,MeshReflectorMaterial,Float,Text,Html,PivotControls,TransformControls,OrbitControls} from "@react-three/drei";
import {Perf} from "r3f-perf";
import Fence from "./fence";
import Tree from "./fence/tree";
import {useRef, useState} from "react";

const useLight=()=>{
    const {camera} = useThree()
    camera.position.x=3
    camera.position.y=3
    camera.position.z=7
    return(
        <>
            <Perf position='top-left'/>
            {/*<orbitControls args={[camera,gl.domElement]}/>*/}
            <OrbitControls args={[camera]} makeDefault />
            <directionalLight castShadow position={[1,2,3]} intensity={1.5} />
            <ambientLight intensity={0.5}/>

            <mesh position-y={-1} rotation-x={-Math.PI*0.5} scale={10}>
                <planeGeometry />
                {/*<meshBasicMaterial color='greenyellow'/>*/}
                {/*<meshStandardMaterial color='greenyellow'/>*/}
                <meshStandardMaterial color='greenyellow'/>
            </mesh>
            <Sky/>
            <Fence></Fence>
            <Tree></Tree>
        </>
    )
}
export default useLight
