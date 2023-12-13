import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const HomeLayout = lazy(() => import('../app/home/layout'))
const DiscoverPage = lazy(() => import('../app/home/discover/page'))
const PopularPage = lazy(() => import('../app/home/popular/page'))
const TrendingPage = lazy(() => import('../app/home/trending/page'))

export const homeRoutes: RouteObject = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: 'discover',
      element: <DiscoverPage />,
    },
    {
      path: 'popular',
      element: <PopularPage />,
    },
    {
      path: 'trending',
      element: <TrendingPage />,
    },
  ],
}
