import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import {login} from "../api/login";

const Home = () => {
  const navigate = useNavigate()
    console.time()
    let total=0
    for (let i = 1; i<=10000;i++){
        total+=i
    }
    console.log(total)
    console.timeEnd()

    function add(){
        login({
            username:'admin',
            password:'123456'
        }).then(res=>{
            console.log(res)
        })
    }
  return (
    <div>
        <div>home</div>
        <div>
          <Button type="primary" onClick={()=>add()}>login</Button>
          <Button type="primary" onClick={()=>navigate('/about/2')}>to about</Button>
        </div>
    </div>
  );
};

export default Home;
