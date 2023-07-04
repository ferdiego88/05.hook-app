import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  
  const user = {
    id: 123,
    name: 'Fernando',
  }
  const { setUser } = useContext(UserContext);
  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />
        <button 
          className='btn btn-primary'
          onClick={() =>setUser(user)}
          >
          Login
        </button>
    </div>
  )
}
