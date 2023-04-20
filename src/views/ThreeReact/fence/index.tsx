
import {Clone,useGLTF} from "@react-three/drei";
import {useControls} from "leva";


export default function Fence(){
    const model = useGLTF('/src/assets/three3D/sds.glb')
    const {positionOne,
        positionTwo,
        positionThree,
        positionFour,
        rotationFour,
        positionFive,
        positionSix,
        positionSeven,
        rotationSeven,
        positionEight,
        positionNine,
        positionTen,
        positionEleven,
        positionTwelve
    }=useControls({
        positionOne: [-4,-0.5,0],
        positionTwo: [-4,-0.5,-2.5],
        positionThree: [-4,-0.5,2.5],
        positionFour: [0,-0.5,4],
        rotationFour: [0,1.6,0],
        positionFive: [-2.5,-0.5,4.07],
        positionSix: [2.5,-0.5,3.93],
        positionSeven: [0,-0.5,-4],
        rotationSeven: [0,-1.6,0],
        positionEight: [-2.5,-0.5,-4.07],
        positionNine: [2.5,-0.5,-3.93],
        positionTen: [4,-0.5,0],
        positionEleven: [4,-0.5,-2.5],
        positionTwelve: [4,-0.5,2.5],
    })
    return <group>
        <Clone object={model.scene} position={positionOne}></Clone>
        <Clone object={model.scene} position={positionTwo}></Clone>
        <Clone object={model.scene} position={positionThree}></Clone>
        <Clone object={model.scene} position={positionTen}></Clone>
        <Clone object={model.scene} position={positionTwelve}></Clone>
        <Clone object={model.scene} position={positionEleven}></Clone>
        <Clone object={model.scene} position={positionFour} rotation={rotationFour}></Clone>
        <Clone object={model.scene} position={positionFive} rotation={rotationFour}></Clone>
        <Clone object={model.scene} position={positionSix} rotation={rotationFour}></Clone>
        <Clone object={model.scene} position={positionSeven} rotation={rotationSeven}></Clone>
        <Clone object={model.scene} position={positionEight} rotation={rotationSeven}></Clone>
        <Clone object={model.scene} position={positionNine} rotation={rotationSeven}></Clone>
    </group>
}
