import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Resume">Resume</NavLink>
    </div>
  )
}
