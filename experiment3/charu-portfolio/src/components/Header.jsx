import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="brand-row">
        <div className="brand-left">DEV_VAULT</div>
        <nav>
          <a className="logo" href="#">CHARU_SOOD</a>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
