import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import AppRouter from './router'

function App() {
  const routes = useRoutes(AppRouter)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {routes}
      </header>
    </div>
  );
}

export default App;
