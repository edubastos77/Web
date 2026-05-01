import React from 'react';
import Botao from './Botao';
import './App.css';

function App() {
  return (
    <div className="calculadora">
      <div className="display">0.75</div>
      <div className="teclado">
        <Botao label="AC" triplo /> <Botao label="/" laranja />
        
        <Botao label="7" /> <Botao label="8" /> <Botao label="9" /> <Botao label="*" laranja />
        
        <Botao label="4" /> <Botao label="5" /> <Botao label="6" /> <Botao label="-" laranja />
        
        <Botao label="1" /> <Botao label="2" /> <Botao label="3" /> <Botao label="+" laranja />
        
        <Botao label="0" duplo /> <Botao label="." /> <Botao label="=" laranja />
      </div>
    </div>
  );
}

export default App;