import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div>home</div>
        <div>
          <Button type="primary" onClick={()=>navigate('/about')}>to about</Button>
        </div>
    </div>
  );
};

export default Home;
