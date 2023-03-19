import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">NewsDozer</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
    </ul>
  </div>
</nav> */}
<nav className='navbar'>
  <ul>
    <li><Link  to="/home">Home</Link></li>
    <li><Link  to="/about">About</Link></li>
    {/* <li><Link  to="/services">Services</Link></li> */}
    <li><Link  to="/contact">Contact</Link></li>
    {/* <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li> */}
    <li><div className="dropdown">
            <button className="dropbtn">
                <span>categories</span>
                <span className="icon">&#9759;</span>
            </button>
            <div className="dropdown-content mar-t-1">
              <Link to="/business">business</Link>
              <Link to="/entertainment">entertainment</Link>
              <Link to="/general">general</Link>
              <Link to="/health">health</Link>
              <Link to="/science">science</Link>
              <Link to="/sports">sports</Link>
              <Link to="/technology">technology</Link>
            </div>
        </div>
        </li>
  </ul>
</nav>
       
{/* <div className="menu">
    <button className="toggle">Topics</button>
    <ul className="list">
      <li className="list-item" style={{'--delay':"0.2s"}}><Link to="/business">business</Link></li>
      <li className="list-item" style={{'--delay':"0.4s"}}><Link to="/entertainment">entertainment</Link></li>
      <li className="list-item" style={{'--delay':"0.6s"}}><Link to="/general">general</Link></li>  
      <li className="list-item" style={{'--delay':"0.8s"}}><Link to="/health">health</Link></li>
      <li className="list-item" style={{'--delay':"0.8s"}}><Link to="/science">science</Link></li>
      <li className="list-item" style={{'--delay':"0.8s"}}><Link to="/sports">sports</Link></li>
      <li className="list-item" style={{'--delay':"0.8s"}}><Link to="/technology">technology</Link></li>
    </ul>
  </div> */}
    </div>
    )
  }
}

export default NavBar