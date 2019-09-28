import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Admin from "./components/Admin.js"
import Home from "./components/Home.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/admin" exact component={Admin}/>
      </Router>
    </div>
  );
}

export default App;
