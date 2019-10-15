import React, { useState } from "react";

export default function Login(props) {

    const initialLoginState = {
        name: "",
        age: "",
        email: ""
      };
    
      const [state, setState] = useState(initialLoginState);

      
      const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        const post = {
          name: state.name,
          age: state.age,
          email: state.email
        };


      };
  return (
    <div>
      <div className="App">
        <h1> Please Sign In </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={state.name}
            />
          </div>
          <br />
          <div>
            <label>Age </label>
            <br />
            <input
              type="text"
              name="age"
              onChange={handleChange}
              value={state.age}
            />
          </div>
          <br />
          <div>
            <label>Email </label>
            <br />
            <input
              type="text"
              name="height"
              onChange={handleChange}
              value={state.height}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
