import React from 'react'
import './Header.css'
import logo from './react.svg'
import MenuLink from '../MenuLink/MenuLink'


function Header() {
  return (
    <div id="navcontent">
      <a href='https://reactjs.org' target='_blank' rel='noreferrer noopener'>
        <img src={logo} alt='React Logo' /></a>
        <div>
          <MenuLink linkname="Home" url="#home"/>
          <MenuLink linkname="About" url="#about"/>
          <MenuLink linkname="Services" url="#services"/>
          <MenuLink linkname="Contact" url="#contact"/>
        </div>
    </div>
  )
}

export default Header