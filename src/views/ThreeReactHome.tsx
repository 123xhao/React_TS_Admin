import {Canvas} from "@react-three/fiber";
import { Outlet } from 'react-router-dom';
import * as THREE from 'three';


const ThreeReactHome=()=>{
    return (
        <Canvas
            // flat
            // dpr={ [1,2] }
            gl={{
                antialias:true,
                toneMapping:THREE.ACESFilmicToneMapping,
                outputEncoding:THREE.sRGBEncoding
                // outputEncoding:THREE.LinearEncoding
            }}
            camera={{
                fov:45,
                near:0.1,
                far:200,
                position:[3,2,6]
            }}>
            <Outlet/>
        </Canvas>
    )
}
export default ThreeReactHome
