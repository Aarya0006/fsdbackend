import React, { useEffect, useState } from "react";
import axios from "axios";

const View = () => {
  const [users, setUsers] = useState([]);
  const handleview = async () => {
    const res = await axios.get("http://localhost:9000/users");
    setUsers(res.data);
  };

  useEffect(() => {
    handleview();
  }, []);

  return (
    <div>
      <h1>View Registererd Users</h1>
      <table
        style={{
          width: "100%",
          backgroundColor: "yellowgreen",
          border: "5px solid red",
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View
