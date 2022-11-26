/** @format */
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/user.slice";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Space, Table, Button } from "antd";

const UsersList = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => (
        <Space size="small">
          <Button type="primary" danger>
            <Link
              to={`/edit/${record.id},${record.name},${record.age}`}
              className="btn btn-primary"
            >
              Edit
            </Link>
          </Button>{" "}
          <Button
            type="primary"
            onClick={(e) => {
              e.preventDefault();
              HandleDelete(index);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const allusers = useSelector((state) => state.users?.users);
  console.log("allusers", allusers);

  const HandleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <h1>All Users List</h1>

      <Button>
        <Link to="/addUser">Add user</Link>
      </Button>
      {/* <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allusers?.map((item, index) => (
            <tr key={item.id}>
              <td>{item?.id}</td>
              <td>{item?.name}</td>
              <td>{item?.age}</td>
              <td>
                <button>
                  <Link
                    to={`/edit/${item.id},${item.name},${item.age}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                </button>{" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    HandleDelete(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Table bordered columns={columns} dataSource={allusers} />
    </>
  );
};

export default UsersList;
