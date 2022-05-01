import Navbar from "./common/Navbar/Navbar";
import './App.css'
import {BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">    
      <Router>
       <Navbar />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
         <Route exact path='/gallery' component={Gallery} />
       </Switch>
      </Router>
    </div>
  );
}

//added some changes 

export default App;
