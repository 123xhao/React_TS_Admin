import React from 'react';
import { useRoutes } from 'react-router-dom';
import AppRouter from './router'
import { CSSProperties } from 'react';
import {Canvas} from "@react-three/fiber";
import * as THREE from "three";

const routerBox:CSSProperties={
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
}
const App:React.FC=() => {
  const routes = useRoutes(AppRouter)
  return (<Canvas
      // flat
      // dpr={ [1,2] }
      gl={{
          antialias:true,
          toneMapping:THREE.ACESFilmicToneMapping,
          outputEncoding:THREE.sRGBEncoding
          // outputEncoding:THREE.LinearEncoding
      }}
      // camera={{
      //     fov:45,
      //     near:0.1,
      //     far:200,
      //     position:[3,2,6]
      // }}
      style={routerBox}>{routes}
  </Canvas>);
}

export default App;
