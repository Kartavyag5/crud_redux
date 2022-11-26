/** @format */

import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const userSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      state.users.map((item) => {
        if (item.id == action.payload.id) {
          item.name = action.payload.name;
          item.age = action.payload.age;
          return item;
        }
        return item;
      });
    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export const userReducer = userSlice.reducer;

export const { addUser, updateUser, deleteUser } = userSlice.actions;
