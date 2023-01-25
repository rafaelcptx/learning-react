import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import About from "./components/pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<App />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
