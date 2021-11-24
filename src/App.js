import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
// import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Experience">
            <Experience />
          </Route>
          <Route exact path="/Education">
            <Education />
          </Route>
          <Route exact path="/Skills">
            <Skills />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
