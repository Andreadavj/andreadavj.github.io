import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portafolio from "./components/Portafolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero">
        <img src="/profile.jpg" alt="Doris Valverde" className="profile-img"/>
        <h1>Doris Valverde Jara</h1>
        <h2>Desarrolladora Frontend</h2>
      </header>
      <section className="about">
        <h2>Sobre Mí</h2>
        <p>Ingeniera en Construcción convertida en Desarrolladora Frontend. Me apasiona la creación de interfaces modernas y atractivas.</p>
      </section>
      <Portafolio />
      <Footer />
    </div>
  );
}

export default App;

