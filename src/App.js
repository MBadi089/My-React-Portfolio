import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

function App() {
 
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/about" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/certificate" component={Certificate}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
