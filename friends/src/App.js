import React from "react";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Login from "./Login";
import Friends from "./Friends";
import AddFriend from "./Addfriend";
import PrivateRoute from "./PrivateRoute";

function App(props) {



  const onLogOut = () => {
    localStorage.removeItem("token");
    props.history.replace("/");
  };

  return (
    <div className="App">
      <nav>
        <StyledDiv>
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
        </StyledDiv>
      </nav>
      <main>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/friends" component={Friends} />
        <PrivateRoute path="/addFriend" component={AddFriend} />
      </main>
    </div>
  );
}

export default withRouter(App);



const StyledDiv = styled.div`
  display:flex;
  justify-content:space-between;

`;