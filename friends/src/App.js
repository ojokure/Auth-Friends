import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from "./Login";

function App() {
  return (
    <div className="App">
     <Login/>
    </div>
  );
}

export default App;
