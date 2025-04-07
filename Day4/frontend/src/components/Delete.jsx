import React from "react";
import axios from "axios";

const Update = () => {
    const handleupdate = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const user = { id, name, age };
        await axios.delete(`http://localhost:9000/users/${id}`, user);
        alert("User updated successfully");
    }
  return (
    <div>
      <form onSubmit={handleupdate}>
        <label>
          Id:
          <input type="text" name="id" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="age" />
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
