import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (user.name && user.username) return props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <tr>
        <td className="td-label">
          <label> Name </label>
        </td>
        <td className="td-label">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <tr>
        <td className="td-label">
          <label>username</label>
        </td>
        <td className="td-label">
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </td>
      </tr>
      <button className="addUser-btn">Add new user</button>
    </form>
  );
};
export default AddUserForm;
