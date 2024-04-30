import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Root() {
  return (
    <div>
        <div>
            <Navigation />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}
