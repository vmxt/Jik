import React from 'react'
import { Outlet } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <h2>Home Layout</h2>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Home
