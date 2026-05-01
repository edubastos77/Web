import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    // Inicializamos o estado aqui
    this.state = {
      valor: 0
    };
  }

  aumentar = () => {this.setState({valor: this.state.valor + 10});}
  diminuir = () => {this.setState({valor: this.state.valor - 1});}


  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Contador: {this.state.valor}</h1>
        <p>Este valor vem do this.state</p>
        <button onClick={this.aumentar}>Aumentar</button><br></br>
        <button onClick={this.diminuir}>Diminuir</button>
      </div>
    );
  }
}

export default Contador;

