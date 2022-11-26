/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../redux/user.slice";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const AddUser = () => {
  const { id } = useParams();
  const currentId = id;
  const [user, setUser] = useState(
    !currentId
      ? { id: "", name: "", age: "" }
      : {
          id: currentId.split(",")[0],
          name: currentId.split(",")[1],
          age: currentId.split(",")[2],
        }
  );
  const dispatch = useDispatch();
  const history = useNavigate();
  const allusers = useSelector((state) => state.users?.users);
  console.log("currentId", id);

  const handleSubmit = (values) => {
    console.log("values", values);
    currentId
      ? dispatch(updateUser({ ...values, id: user.id }))
      : dispatch(
          addUser({
            ...values,
            id: parseInt(Math.random() * 100),
          })
        );
    history("/");
  };

  return (
    <>
      <h1>{currentId ? "Edit User" : "Add User"}</h1>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
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
          type="text"
          name="age"
          value={user.age}
          onChange={(e) => {
            e.preventDefault();
            setUser({ ...user, age: e.target.value });
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form> */}
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 6,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          initialValue={user.name}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          initialValue={user.age}
          rules={[
            {
              required: true,
              message: "Please input your Age!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;
