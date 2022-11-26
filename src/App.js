/** @format */
import "./App.css";
import AddUser from "./components/addUser";
import UsersList from "./components/usersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="edit/:id" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
