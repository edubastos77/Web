import React from 'react';
import './App.css';

function Botao(props) {
  // Se a prop 'laranja' for verdadeira, adicionamos uma classe extra
  const classes = `botao ${props.laranja ? 'laranja' : ''} ${props.triplo ? 'triplo' : ''} ${props.duplo ? 'duplo' : ''}`;
  
  return (
    <button className={classes}>
      {props.label}
    </button>
  );
}

export default Botao;