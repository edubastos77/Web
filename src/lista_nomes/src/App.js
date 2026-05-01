import React from 'react';
import "./App.css";

const Nome = (props) => {
  return (
    <div className='estilo'>
     {props.texto}
    </div>
  )
}

function App() {
  return (
    <div>
      <Nome texto="José"/>
      <Nome texto="Maria"/>
      <Nome texto="Fernando"/>
      <Nome texto="Maria Fernanda"/>
    </div>
  );
}

export default App;
