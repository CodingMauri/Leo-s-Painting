import "./App.css";
import Estimate from "./Components/Estimate";
import Hamburger from "./Components/Hamburger";
import Hero from "./Components/Hero";
import Houses from "./Components/Houses";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";
function App() {
  const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({behavior:'smooth'});
  }
  return (
    <div className="App">
      <Hamburger scrollToSection = {scrollToSection}/>
      <NavBar scrollToSection = {scrollToSection} />
      <Hero />
      <Services  />
      <Houses  />
      <Estimate   />
    </div>
  );
}

export default App;
