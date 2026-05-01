import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  muda(event) {
    let state = this.state;
    state.email = event.target.value;
    this.setState(state);
    console.log(state.email)
  }
  render() {
    return (
      <div>
        <h1>Digite o seu e-mail</h1>
        <input 
        type="text" 
        size="20" 
        name="email" 
        onChange={(e) => this.muda(e)} />
        <p>O que estás a escrever: {this.state.email}</p>
      </div>
    );
  }
}
export default App;