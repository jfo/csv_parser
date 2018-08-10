import React, { Component }  from 'react'
import './style.css'

const Header = (props) => (
  <div
    className="button"
    onClick={props.showDropdownMenu}>
    {props.type}
  </div>
)

export default Header
