import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink to='/' className='navbar-brand'>useContext</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink activeclassname="active" className='nav-link' to='/'>Home</NavLink>
          </li>
          <li>
          <NavLink activeclassname="active" className='nav-link' to='/about'>About</NavLink>
          </li>
          <li>
          <NavLink activeclassname="active" className='nav-link' to='/login'>Login</NavLink>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  )
}