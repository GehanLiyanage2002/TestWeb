import React from 'react'
import './MenuLink.css'

function MenuLink(props) {
  return (
    <a href={props.url} className='link'>{props.linkname}</a>
  )
}

function Navbar() {
  const links = [
    { url: "#home", linkname: "Home" },
    { url: "#about", linkname: "About" },
    { url: "#services", linkname: "Services" },
    { url: "#contact", linkname: "Contact" }
  ];

  return (
    <div className="navbar">
      {links.map((link, index) => (
        <MenuLink key={index} url={link.url} linkname={link.linkname} />
      ))}
    </div>
  )
}

export default Navbar