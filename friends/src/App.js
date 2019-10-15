import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Friends from "./Friends";

function App() {

  const onLogOut = () => {
    localStorage.removeItem('token');

  }
  return (
    <div className="App">
      <nav>
        <span>
        <NavLink exact to="/" > Log In </NavLink>
        <NavLink exact to="/friends" > My Friends List </NavLink>

        </span>
        <button onClick={onLogOut}> Log Out </button>
      </nav>
      <main>
        <Route exact path="/" component={Login} />
        <Route path="/friends" component={Friends} />
      </main>
    </div>
  );
}

export default App;
