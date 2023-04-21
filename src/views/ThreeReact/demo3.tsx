import React, {useRef, useState} from 'react'
import {Html, Sky, Stars, Environment, OrbitControls, useTexture, Text,Float} from '@react-three/drei'
import {useFrame} from "@react-three/fiber";
import '../ThreeReact/CSSModule/index.css'
const inputCss={
    width:'200px',
    height:'50px',
    background:'lightskyblue',
    border:'none',
    color:'blue',
    opacity:0.5,
    marginTop:'20px',
    borderRadius:'20px',
    padding:'10px 20px',
    fontSize:'20px'
}
function Night() {
    const [night, setNight] = useState(false)
    const texture = useTexture('/src/assets/earth.jpg',)
    const sphereRef=useRef<Mesh<BufferGeometry, Material | Material[]>>()
    useFrame((state, delta)=>{
        sphereRef.current.rotation.y+=0.01 // 物体单方面旋转
    })

    return (
        <>
            <Sky
                distance={100000}
                inclination={night ? 0.4 : 0.5}
                turbidity={night ? 8 : 10}
                rayleigh={night ? 0.1 : 2}
                mieCoefficient={night ? 0.001 : 0.03}
                mieDirectionalG={night ? 0.9 : 0.8}
                sunPosition={[night ? -1 : 1, 0.5, -1]}
            />
            {/*<OrbitControls makeDefault />*/}
            <Stars radius={1000} depth={50} count={5000} factor={4} fade />
            <ambientLight intensity={0.3} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            {/*<Environment texture={groundTexture} />*/}
            <mesh ref={sphereRef} position={[-2, 0, 0]} scale={1.2}>
                <sphereGeometry  args={[2, 32, 32]} />
                <meshStandardMaterial map={texture} color="#ffffff" />
            </mesh>
            <Float
                speed={5}
                floatIntensity={2}
            >
                <Text
                    fontSize={0.2}
                    color='lightskyblue'
                    position-y={2}
                    maxWidth={2}
                    textAlign='center'
                    position={[2.5,1,1]}
                >
                    welcome to three world
                    {/*<meshNormalMaterial />*/}
                </Text>
            </Float>
            <Html position={[2,1,1]}>
                <input className="inputCss" style={inputCss} placeholder='请输入你的名称' type="text"/>
                <input className="inputCss" style={inputCss} placeholder='请输入密码' type="password"/>
                <input value='登 录' style={{...inputCss,opacity:0.3}} type="submit"/>
            </Html>
        </>
    )
}

function App() {
    return (
        <Night />
    )
}

export default App
