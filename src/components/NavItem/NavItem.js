import './NavItem.css'

import React from 'react'

const NavItem = (props) => {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}

const NavItemDropDown = (props) => {
  return (
    <li className='nav-item dropdown'>
        {props.children}
    </li>
  )
}

export default NavItem
export {NavItemDropDown}