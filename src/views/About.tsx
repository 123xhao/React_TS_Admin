import { useParams } from  'react-router-dom'
import {useState} from "react";

function About(){
    const params=useParams()
    console.log(params)
    const [count,setCount] =useState({
        a:1,
        b:2,
        c:{
            d:3,
            e:4
        }
    })
    function c(){
        setCount((value)=>{
            console.log(value)
            return {...value,a:2}
        })
    }
    return (
        <div>
            <div>count:{count.a}</div>
            <div>about</div>
            <button onClick={()=>c()}>click</button>
        </div>
    )
}
export default About
