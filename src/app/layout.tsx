import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from '../components/header/AppHeader'
import AppFooter from '../components/footer/AppFooter'

import AppLoading from '../components/global/AppLoading'

export default function Layout() {
  return (
    <div>
      <AppHeader />
      <h1>Main Layout</h1>
      <Suspense fallback={<AppLoading />}>
        <Outlet />
      </Suspense>
      <AppFooter />
    </div>
  )
}
