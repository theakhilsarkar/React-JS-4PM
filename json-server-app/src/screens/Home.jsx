import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});

  const getName = (e) => setData({ ...data, name: e.target.value });
  const getRole = (e) => setData({ ...data, role: e.target.value });
  const updateField = (x) => setData(x);

  const handleSendUser = async () => {
    const res = await axios.post("http://localhost:3000/users", data);
    if (res.status == 201) {
      alert("user inserted successfully ! ");
    } else {
      alert("cant add user !");
    }
  };

  // POST - 201
  // GET,UPDATE,DELETE - 200

  const handleFetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  const handleDeleteUser = async (id) => {
    const res = await axios.delete("http://localhost:3000/users/" + id);
    handleFetchUsers();
  };

  const handleUpdateUser = async () => {
    const res = await axios.put("http://localhost:3000/users/" + data.id, data);
    handleFetchUsers();
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);
  return (
    <div>
      <div>
        <input
          value={data.name}
          onChange={getName}
          type="text"
          placeholder="Enter name"
        />
        <input
          value={data.role}
          onChange={getRole}
          type="text"
          placeholder="Enter role"
        />
        <button
          onClick={() => {
            handleSendUser();
            handleFetchUsers();
          }}
        >
          Submit
        </button>
        <button onClick={handleUpdateUser}>Update</button>
      </div>
      <div>
        {users.length == 0 ? (
          <p>No Users</p>
        ) : (
          users.map((user, i) => (
            <div
              key={i}
              onClick={() => updateField(user)}
              onDoubleClick={() => handleDeleteUser(user.id)}
            >
              <p>{user.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
