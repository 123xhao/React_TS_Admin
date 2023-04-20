
import {Clone,useGLTF} from "@react-three/drei";
import {useControls} from "leva";


export default function Tree(){
    const treeOne = useGLTF('/src/assets/three3D/tree1.glb')
    const treeTwo = useGLTF('/src/assets/three3D/tree2.glb')
    const treeThree = useGLTF('/src/assets/three3D/tree3.glb')
    const {positionOne,
        positionTwo,
        positionThree,
        scale,
        positionFour,
        positionFive,
        positionSix
    }=useControls('tree',{
        positionOne: [1.7,-1,0],
        positionTwo: [0.5,-1,-1.9],
        positionThree: [2.6,-1,0.8],
        positionFour: [-0.6,-1,2],
        positionFive: [-2.4,-1,0.8],
        positionSix: [-1.7,-1,-0.8],
        scale:0.5,
    })
    return <group>
        <Clone object={treeOne.scene} position={positionOne} scale={scale}></Clone>
        <Clone object={treeTwo.scene} position={positionTwo} scale={scale}></Clone>
        <Clone object={treeThree.scene} position={positionThree} scale={scale}></Clone>
        <Clone object={treeOne.scene} position={positionFour} scale={scale}></Clone>
        <Clone object={treeTwo.scene} position={positionFive} scale={scale}></Clone>
        <Clone object={treeThree.scene} position={positionSix} scale={scale}></Clone>
        </group>
}
