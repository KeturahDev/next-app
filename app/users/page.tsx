import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

// How caching works in Next:
// {cache: "no-store"} will fetch on every refresh
// { next: { revalidate: 10 }} next js will run a backend job to get fresh data every 10 seconds
// note: next js caching only accessible in fetch function.. so not available in axios

//self question: does this mean this file is not statically rendered, because some of the data is not static?
// or does it mean that this site is statically rendered (built at runtime), but has a specific backend job
// to update the cache?
// answer: since theres a specific note to "no-store" cache, it will designate this component to run at request time
const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users', {cache: "no-store"});
  const users: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage