import "./App.css";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar"
import ProjectCarousel from "./Components/ProjectCarousel";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ProjectCarousel />
    </div>
  );
}

export default App;
