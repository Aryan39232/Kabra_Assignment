import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E-Com</a>
        <button className="navbar-toggler" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink to={'/'}>
              <p className="nav-NavLink active" >Products</p>
            </NavLink>
            <NavLink to={'/cart'}>
              <p classNameName="nav-NavLink" >Cart</p>
            </NavLink>
            <NavLink to={'/create-product'}>
              <p className="nav-NavLink">Create Product</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar