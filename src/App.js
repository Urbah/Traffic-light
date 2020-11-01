import React from 'react';
import './App.css';
import Base from './components/base'
import Light from './components/light'

function App() {
  const lights = [
    {color:'red'},
    {color:'yellow'},
    {color:'green'}
  ]

  return (
    <>
      <Base/> 
      <div className="container"> 
        <Light color={lights}/> 
      </div>
    </>
  );
}

export default App;
