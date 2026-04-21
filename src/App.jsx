import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>SOBRE NÓS</h1>
      </header>
      <main>
        <section>
          <article id="art1">
            <h2>Nosso Modelo de Negocios: </h2><br />
            Nosso modelo de negocios se baseia em entender completamente o
            problema do cliente (oque estq causando esse problema, porque esse
            problema preicisa ser resolvido, qual jeitos nossos clientes acharam
            para combatelo, etc), para que possamos saber o melhor jeito de
            lidar com problema.
          </article>
          <article id="art2">
            <h2>Como Nos Contatar: </h2><br />
            Para nos contatar basta apenas clicar no botão abaixo para mandar um
            email, caso você vire um cliente, nosso contato vira por numero de
            celular.
            <button>nos contate por aqui</button>
          </article>
          <article id="art3">
            <h2>Porque Nos Escolher: </h2><br />
            Nossa empresa presa muito pelo bom atendimento e custo beneficio do
            nosso trabalho, alem de sempre responder nossos clientes em no
            maximo 4 horas para um melhor atendimento a todos
          </article>
        </section>
      </main>
      <footer>
        <a href="#">suporte</a>
        <a href="#">contatos</a>
        <a href="#">clientes</a>
      </footer>
    </>
  );
}

export default App;
