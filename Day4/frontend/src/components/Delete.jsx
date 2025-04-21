import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handleDelete = async (e) => {
        e.preventDefault();
        const id = e.target.id.value
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert('User Deleted successfully')
      }
  return (
    <div>
        <h1>Delete User</h1>
      <form onSubmit={handleDelete}>
        <label>
          Id:
          <input type="text" name="id" />
        </label>
       
        <button type='submit'>Delete</button>
      </form>
    </div>
  )
}

export default Delete