import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navbar/index";
import { Banner }  from "./components/banner/index";
import { Skills } from "./components/skills/index";
import { Projects } from "./components/allprojects/index";
import { Contact } from "./components/contact/index";
import { Footer } from "./components/footer/index"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
