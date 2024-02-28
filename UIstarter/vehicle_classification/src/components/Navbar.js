// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div class="topnav">
        <Link to="/" className='nav-select'>Security Feed</Link>
        <Link to="/analytics" className='nav-select'>Analytics</Link>
    </div>
        
    </>
  )
}

export default Navbar