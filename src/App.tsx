import React from "react";
import MeuPrimeiroComponent from "./components/MeuPrimeiroComponent";
import SegundoComponente from "./components/SegundoComponente";
import Desctructuring, { Category } from "./components/Desctructuring";
import State from "./components/State";

function App() {
  const name = "Luiz";
  const age = 40;
  const isWorking = true;

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className="App">
      <h1>React com Typescript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <MeuPrimeiroComponent />
      <SegundoComponente name="segundo" />
      <Desctructuring
        title="Primeiro post"
        content="Meu primeiro post"
        commentQty={2}
        tags={["js", "ts"]}
        category={Category.TS}
      />
      <Desctructuring
        title="Segundo post"
        content="Meu segundo post"
        commentQty={3}
        tags={["python"]}
        category={Category.PY}
      />
      <State />
    </div>
  );
}

export default App;
