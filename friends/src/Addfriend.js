import React, { useState } from "react";
import axiosWithAuth from "./axioswithAuth";
import Loader from "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";

export default function AddFriend(props) {
  const initialAddForm = {
    name: "",
    age: "",
    email: ""
  };

  const [addForm, setAddForm] = useState(initialAddForm);

  const handleChange = e => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const postForm = {
      name: addForm.name,
      password: addForm.password,
      email: addForm.email
    };
    axiosWithAuth()
      .post("/login", postForm)
      .then(res => { console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="App">
        <h2> Add a new friend </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={addForm.name}
            />
          </div>
          <br />
          <div>
            <label> Age </label>
            <br />
            <input
              type="text"
              name="age"
              onChange={handleChange}
              value={addForm.age}
            />
          </div>

          <br />
          <div>
            <label> Email </label>
            <br />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={addForm.email}
            />
          </div>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
