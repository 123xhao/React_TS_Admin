// import {useThree,extend,useFrame} from "@react-three/fiber";
import {useRef} from "react";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import CustomObject from "./CustomObject";
import {Sky,MeshReflectorMaterial,Float,Text,Html,PivotControls,TransformControls,OrbitControls} from "@react-three/drei";
import './demoCSS.css'
import {Perf} from "r3f-perf";
// extend({OrbitControls})

const useLight=()=>{
    // const { camera, gl }=useThree()
    const cubeRef=useRef<Mesh<BufferGeometry, Material | Material[]>>()
    const groupRef=useRef<Mesh<BufferGeometry, Material | Material[]>>()
    const sphereRef=useRef<Mesh<BufferGeometry, Material | Material[]>>()

    // useFrame((state,delta)=>{
    //     // state.camera.position.x+=delta //相机移动
    //     // const angle=state.clock.elapsedTime
    //     // state.camera.position.x=Math.sin(angle) *8 //相机移动
    //     // state.camera.position.z=Math.cos(angle) *8 //相机移动
    //     // state.camera.lookAt(0,0,0) //相机视角
    //
    //     // cubeRef.current.rotation.y+=delta // 物体单方面旋转
    //     // groupRef.current.rotation.y+=delta // group包裹的物体旋转
    // })
    return(
        <>
            <Perf position='top-left'/>
            {/*<orbitControls args={[camera,gl.domElement]}/>*/}
            <OrbitControls makeDefault />

            <directionalLight position={[1,2,3]} intensity={1.5} />

            <ambientLight intensity={1.5}/>

            <Sky />

            <group ref={groupRef}>
                <TransformControls position-x={-2} mode="translate">
                    <mesh ref={sphereRef}>
                        <sphereGeometry />
                        {/*<meshBasicMaterial color='blue'/>*/}
                        <meshStandardMaterial color='orange'/>
                        <Html occlude={[sphereRef,cubeRef]} distanceFactor={6} center wrapperClass='label' position={[1,1,0]}>这是一个圆</Html>
                    </mesh>
                </TransformControls>
            {/*<TransformControls object={cubeRef} />*/}
                <PivotControls
                    anchor={[0,0,0]}
                    depthTest={false}
                    lineWidth={4}
                    axisColors={['#9381ff','#ff4d6d','#7ae582']}
                    scale={1}
                    fixed={true}
                >
                    <mesh ref={ cubeRef } rotation-y={Math.PI*0.25} position-x={2} scale={1.5}>
                        {/*<sphereGeometry args={[1.5,32,32]} />*/}
                        <boxGeometry scale={1.5}/>
                        {/*<meshBasicMaterial args={[{color:'skyblue',wireframe:true}]} />*/}
                        {/*<meshBasicMaterial color='skyblue' wireframe />*/}
                        <meshStandardMaterial color='mediumpurple' />
                    </mesh>
                </PivotControls>
            </group>
            <mesh position-y={-1} rotation-x={-Math.PI*0.5} scale={10}>
                <planeGeometry />
                {/*<meshBasicMaterial color='greenyellow'/>*/}
                {/*<meshStandardMaterial color='greenyellow'/>*/}
                <MeshReflectorMaterial mixBlur={1} blur={[1000,1000]} mirror={0.5} color='greenyellow' resolution={512}/>
            </mesh>
            {/*<CustomObject/>*/}
            <Float
                speed={5}
                floatIntensity={2}
            >
                <Text
                    fontSize={1}
                    color='salmon'
                    position-y={2}
                    maxWidth={2}
                    textAlign='center'
                >
                    THREE
                    {/*<meshNormalMaterial />*/}
                </Text>
            </Float>
        </>
    )
}
export default useLight
