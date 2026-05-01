import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../Firebase";
import "../../App.css";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      mensagemErro: ""
    }

    this.acessar = this.acessar.bind(this);
  }

  async acessar() {

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        window.location.href = "./#/principal";
      })
      .catch((erro) => {
        this.setState({ mensagemErro: "O USUÁRIO NÃO ESTÁ CADASTRADO." });

      });
  }

  render() {
    return (
      <div>

        <h1>Tela de Login</h1>

        {/* Exibe a mensagem de erro se o state mensagemErro não estiver vazio */}
        {this.state.mensagemErro && (
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            {this.state.mensagemErro}
          </p>
        )}
        <input type="text" placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <input type="password" placeholder="Senha" autoComplete="new-password" onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
        <button onClick={this.acessar}>Acessar</button> <br /><br /><br />

        <Link to="/cadastro"><button>Ir para Cadastro</button></Link>

      </div>
    )
  }
}
export default Login