import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from "./Login";
import Friends from "./Friends";


function App() {
  return (
    <div className="App">
     <Login/>
     <Friends/>
    </div>
  );
}

export default App;
