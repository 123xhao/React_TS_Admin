import { Center,Text3D, OrbitControls } from "@react-three/drei";
import {Perf} from  'r3f-perf'
import {useRef,useState} from "react";
import {useFrame} from "@react-three/fiber";


const Demo3=()=>{
    const groupRef=useRef<any>()
    const [torusGeometry,setTorusGeometry]=useState<any>()
    const [material,setMaterial]=useState<any>()
    useFrame((state,delta)=>{
        for (const donut of groupRef.current.children){
            donut.rotation.y+=delta*0.2
        }
    })
    return(
        <>
            <Perf position='top-left' />
            <OrbitControls makeDefault/>
            <torusGeometry ref={ setTorusGeometry } args={[1,0.6,16,32]}/>
            <meshNormalMaterial ref={ setMaterial } />
            <Center>
                {/*必须引入font字体样式*/}
                <Text3D font="/src/assets/fonts/BebasNeue_Regular.json"
                        size={0.75}
                        height={0.2}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelOffset={0}
                        bevelSize={0.02}
                        bevelSegments={5}
                >
                    hello three
                    <meshNormalMaterial/>
                </Text3D>
            </Center>
            <group ref={groupRef}>
                {[...Array(100)].map((value,index)=>
                    <mesh
                        material={material}
                        key={index}
                        geometry={torusGeometry}
                        position={[
                            (Math.random()-0.5)*10,
                            (Math.random()-0.5)*10,
                            (Math.random()-0.5)*10
                        ]}
                        scale={0.2+Math.random()*0.2}
                        rotation={[
                            Math.random()*Math.PI,
                            Math.random()*Math.PI,
                            0
                        ]}
                    />
                )}
            </group>
        </>
    )
}
export default Demo3
