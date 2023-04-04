import React, { useState } from "react";
import "./index.css";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container">
      <h1> CRUD System</h1>
      <div className="flexbox">
        <div className="f-left">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}

          {/* <AddUserForm addUser={addUser} /> */}
        </div>
        <div className="f-right">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};
export default App;
