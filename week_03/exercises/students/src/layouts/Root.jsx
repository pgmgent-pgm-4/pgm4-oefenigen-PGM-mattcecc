import React from 'react'
import Navigation from '../components/Navigation'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
        <div>
            <Navigation />
        </div>
        <h2>Students</h2>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
