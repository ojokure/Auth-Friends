import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axioswithAuth";


export default function Friends(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      });
  }, []);

  return (
    <div>
      {friends.map(el => (
        <div key={el.id}>
          <p>{el.name}</p>
          <p>{el.age}</p>
          <p>{el.email}</p>
        </div>
      ))}
    </div>
  );
}
