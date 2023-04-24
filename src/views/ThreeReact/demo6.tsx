import {useFrame} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useRef} from "react";
import {Perf} from "r3f-perf";
import { SSR,DepthOfField,Bloom,Noise,Glitch,Vignette,EffectComposer} from "@react-three/postprocessing";
import { GlitchMode,BlendFunction} from 'postprocessing';
// import {useControls} from 'leva';


export default function Demo5(){
    const cube = useRef<any>()
    useFrame((state,delta)=>{
        cube.current.rotation.y+=delta*0.2
    })
    const eventHandler=()=>{
        cube.current.material.color.set(`hsl(${Math.random()*360},100%,75%)`)
    }


    return(
        <>

            <color args={['#000000']} attach='background'/>
            <EffectComposer>
                <Vignette
                    offset={0.3}
                    blendFunction={BlendFunction.NORMAL}
                    darkness={0.9}/>
                <Glitch delay={[0.5,1]} duration={[0.1,0.3]} strength={[0.02,0.04]} mode={GlitchMode.CONSTANT_WILD}/>
                <Noise blendFunction={BlendFunction.SOFT_LIGHT}/>
                <Bloom mipmapBlur intersity={0.5} luminanceThreshold={0}/>
                <DepthOfField
                    focusDistance={0.025}
                    focusLength={0.025}
                    bokehScale={6}
                />
                <SSR />
            </EffectComposer>
            <Perf position='top-left' />
            {/*控制屏幕移动放大缩小*/}
            <OrbitControls makeDefault/>

            <directionalLight position={[1,2,3]} intensity={1.5}/>
            <ambientLight intensity={0.5}/>
            <mesh position-y={-1} rotation-x={-Math.PI*0.5} scale={10}>
                <planeGeometry />
                {/*<meshBasicMaterial color='greenyellow'/>*/}
                {/*<meshStandardMaterial color='greenyellow'/>*/}
                <meshStandardMaterial color='greenyellow' metalness={0} roughness={0}/>
            </mesh>
            <mesh position-x={-2} onClick={(e)=>e.stopPropagation()}>
                <sphereGeometry />
                <meshStandardMaterial color='orange'/>
            </mesh>
            {/*onContextMenu禁止鼠标右键打开 onPointerOver鼠标移入onPointerMove鼠标移动onPointerOut鼠标移除onPointerMissed鼠标*/}
            <mesh ref={cube}
                  position-x={2}
                  scale={1.5}
                  onClick={eventHandler}
                  onPointerEnter={(e)=>{document.body.style.cursor='pointer'}}
                  onPointerLeave={()=>{document.body.style.cursor='default'}}
            >
                <boxGeometry />
                <meshStandardMaterial color='purple' />
            </mesh>
        </>
    )
}
