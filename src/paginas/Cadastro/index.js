import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../Firebase";
import "../../App.css";

class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      dataNascimento: ""
    }

    this.gravar = this.gravar.bind(this);
  }


  async gravar() {
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then(async (retorno) => {

      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento,
        email: this.state.email,
        senha: this.state.senha
      });
      alert("Usuário cadastrado com sucesso!");
    })
    .catch((error) => {
      alert("Erro ao cadastrar");
    });
  }

  render() {
    return (
      <div>

        <h1>Tela de Cadastro</h1><br/>
        <input type="text" placeholder="email" autoComplete="off" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <input type="password" placeholder="Senha" autoComplete="new-password" onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
        <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
        <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} /> <br />
        <input type="date" placeholder="Data de Nascimento" onChange={(e) => this.setState({ dataNascimento: e.target.value })} /> <br />

        <button onClick={this.gravar}>Gravar</button> <br /><br /><br />

        <Link to="/"><button>Login</button></Link>

      </div>
    )
  }
}

export default Cadastro