import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
