import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from '../components/header/AppHeader'
import AppFooter from '../components/footer/AppFooter'

import AppLoading from '../components/global/AppLoading'

export default function Layout() {
  return (
    <div>
      <AppHeader />
      <Suspense fallback={<AppLoading />}>
        <Outlet />
      </Suspense>
      <AppFooter />
    </div>
  )
}
