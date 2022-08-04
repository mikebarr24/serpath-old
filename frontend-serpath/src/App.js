import { Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Routes></Routes>
    </div>
  );
}

export default App;
