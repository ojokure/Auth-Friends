import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Friends from "./Friends";
import AddFriend from "./Addfriend";
import PrivateRoute from "./PrivateRoute";

function App() {
  const onLogOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="App">
      <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "spaceBetween",
        }}
      >
        <div>
          <NavLink exact to="/">
            Log In
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/friends">
            My Friends List
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/addFriend">
            Add a friend
          </NavLink>
        </div>
        <button onClick={onLogOut}> Log Out </button>
      </div>
      </nav>
      <main>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/friends" component={Friends} />
        <PrivateRoute path="/addFriend" component={AddFriend} />
      </main>
    </div>
  );
}

export default App;
