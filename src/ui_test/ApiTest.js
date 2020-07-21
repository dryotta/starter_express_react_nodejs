import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function ApiTest() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const users = await fetch('/api/users')
      .then(res => res.json())
    setUsers(users)
  }

  return (
    <div>
      <header>
        <Button onClick={fetchUsers}>Fetch users</Button>
        {users.length > 0 && <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>}
      </header>
    </div>
  )
}