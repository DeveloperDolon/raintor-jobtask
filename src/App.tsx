import Navbar from "./components/Navbar";
import bgImage from "./assets/hero-bg.png";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <header
        className="min-h-screen"
        style={{
          background: `url(${bgImage}) no-repeat top center`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Hero />
      </header>
    </main>
  );
}

export default App;
