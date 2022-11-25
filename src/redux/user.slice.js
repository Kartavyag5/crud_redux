/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    getUsers: (state, action) => {
      state.users = [...action.payload];
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      alert("user added successfully");
    },
    updateUser: (state, action) => {
      state.users = state.users.map((item) => {
        if (item.id == action.payload.id) {
          item.name = action.payload.name;
          item.age = action.payload.age;
          return item;
        }
        return item;
      });
      return state.users;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((item) => item.id != action.payload);
      return state.users;
    },
  },
});
