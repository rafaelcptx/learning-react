import "./App.css";
import StateLiftComponent from "./components/StateLiftComponent";
import Saudacoes from "./components/Saudacoes";
import { useState } from "react";

function App() {
  const [name, setName] = useState();

  return (
    <div>
      <h1>State Lift</h1>
      <StateLiftComponent setName={setName} />
      <Saudacoes name={name} />
    </div>
  );
}

export default App;
