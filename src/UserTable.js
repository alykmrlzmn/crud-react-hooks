import React from "react";
import "./index.css";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td className="td-userTable">{user.name}</td>
            <td className="td-userTable">{user.username}</td>
            <td className="td-userTable">
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}> No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
