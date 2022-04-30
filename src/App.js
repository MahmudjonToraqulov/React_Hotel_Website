import Navbar from "./common/Navbar/Navbar";
import './App.css'
import {BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">    
      <Router>
       <Navbar />
       <Switch>
         <Route exact path='/' />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
