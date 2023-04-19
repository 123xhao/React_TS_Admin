import React from 'react';
import { useRoutes } from 'react-router-dom';
import AppRouter from './router'
import { CSSProperties } from 'react';
const routerBox:CSSProperties={
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
}
const App:React.FC=() => {
  const routes = useRoutes(AppRouter)
  return (<div style={routerBox}>{routes}</div>);
}

export default App;
