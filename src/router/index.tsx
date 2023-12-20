import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import { homeRoutes } from './homeRoutes'

const Layout = lazy(() => import('../app/layout'))
const RecentPage = lazy(() => import('../app/recent/page'))
const SeasonPage = lazy(() => import('../app/season/page'))
const AnimeInfoPage = lazy(() => import('../app/anime/[id]/page'))

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      homeRoutes,
      {
        path: 'recent',
        element: <RecentPage />,
      },
      {
        path: 'season',
        element: <SeasonPage />,
      },
      {
        path: 'anime/:animeId',
        element: <AnimeInfoPage />,
      },
    ],
  },
])
