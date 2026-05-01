import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', senha: '', mensagem: ''};
  }

  // inputs
  muda = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  // validação
  validarAcesso = () => {
    const { email, senha } = this.state;
    const emailCorreto = "eduardo.bastos@pucpr.br";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Login</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px' }}>
          <input type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.muda} />
          
          <input type="password" name="senha" placeholder="Senha" value={this.state.senha} onChange={this.muda} />

          <button onClick={this.validarAcesso} style={{ width: '100px', cursor: 'pointer' }}>
            Acessar
          </button>
        </div>

        {this.state.mensagem && ( 
          <p style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold', color: this.state.mensagem === 'Acessado com sucesso!' ? 'green' : 'red' }}>
            {this.state.mensagem}
          </p>
        )}
      </div>
    );
  }
}

export default App;