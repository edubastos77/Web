import React, { Component } from 'react';
import Imagem from "./assets/image.png"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Edu',
      feed: [
        { id: 1, username: "Eduardo", curtidas: 10, comentarios: 2 },
        { id: 2, username: "Amanda", curtidas: 30, comentarios: 12 },
        { id: 3, username: "Olivia", curtidas: 100, comentarios: 20 }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <img src={Imagem}></img>
        {this.state.feed.map((item) => (
          <div key={item.id}>
            <h3>Usuário: {item.username}</h3>
            <p>Curtidas: {item.curtidas} | Comentários: {item.comentarios}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;