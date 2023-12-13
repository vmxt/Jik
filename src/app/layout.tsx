import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <h1>Main Layout</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
