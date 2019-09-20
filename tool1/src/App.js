import React from "react";
// import './App.css';
import Todolist from "./utility/todolist";
import RegisterForm from "./utility/registerform";
import MemeGenerator from "./utility/MemeGenerator";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header
          style={{
            background:
              "url(https://images.sharefaith.com/images/3/1507570813956_36/img_mouseover3.jpg)"
          }}
        >
          here is the thing
        </header>
        <br />
        <Link to="/todolist">To do list</Link>
        <br />
        <Link to="/memegenerator">Meme Generator</Link>
        <br />
        <Link to="/regiestorform">Register Form</Link>
      </div>
      <Route name="home" exact path="/todolist" component={Todolist} />
      <Route
        name="meme"
        exact
        path="/memegenerator"
        component={MemeGenerator}
      />
      <Route
        name="regist"
        exact
        path="/regiestorform"
        component={RegisterForm}
      />
    </Router>
  );
}

export default App;
