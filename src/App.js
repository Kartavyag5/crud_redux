/** @format */

import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/addUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<h1>Hello User</h1>} />
          <Route path='addUser' element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
