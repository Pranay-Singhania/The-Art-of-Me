import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-left'>
            <a href="/">Pranay Singhania</a>
        </div>
        <div className='nav-right'>
            <a href="/about" className='nav-link underline-btn'>
                about
            </a>
            <a href="/about" className='nav-link underline-btn'>
                skills
            </a>
            <a href="/about" className='nav-link underline-btn'>
                projects
            </a>
            <a href="/about" className='nav-link underline-btn'>
                contact
            </a>
            <button className='nav-resume-btn slide-btn'>Resume</button>
        </div>
    </nav>
  )
}

export default Navbar