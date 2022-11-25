/** @format */

import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({ name: "", age: "" });
  const handleSubmit = () => {
    console.log("user", user);
  };
  console.log();

  return (
    <>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type='text'
          name='name'
          value={user.name}
          onChange={(e) => {
            e.preventDefault();
            setUser({ ...user, name: e.target.value });
          }}
        />
        <br />
        <label>Age:</label>
        <br />
        <input
          type='text'
          name='age'
          value={user.age}
          onChange={(e) => {
            e.preventDefault();
            setUser({ ...user, age: e.target.value });
          }}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default AddUser;
