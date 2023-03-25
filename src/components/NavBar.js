import React from 'react'
import { Link } from 'react-router-dom'

const NavBar=()=> {
    return (
      <div>
 
<nav className='navbar'>
  <ul>
    <li><Link  to="/home">Home</Link></li>
    <li><Link  to="/about">About</Link></li>
    <li><Link  to="/contact">Contact</Link></li>
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
    </div>
    )

}

export default NavBar