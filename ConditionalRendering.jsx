import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function evento() {
    setUserEmail(email);
  }

  function limpar() {
    setUserEmail("");
  }

  return (
    <div>
      <h1>Renderização condicional</h1>
      <input
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={evento}>Enviar</button>
      {userEmail && (
        <div>
          <p>o Email do usuário é:</p> {userEmail}
          <br></br>
          <button onClick={limpar}>Limpar</button>
        </div>
      )}
    </div>
  );
}

export default App;
