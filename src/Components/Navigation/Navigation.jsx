import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" style={{fontWeight:"bold",color:"white"}} 
     to="/">SNEA<span className='text-danger'>KISS</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formensdata">MEN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/forwomendata">WOMEN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ditels">COLLECTIONS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">CONTACT US</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/">lOGO</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
