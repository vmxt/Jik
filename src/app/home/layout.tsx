import React from 'react'
import { Outlet } from 'react-router-dom'
import useGetAnimeList from './use_get_anime_list'

import AppCarousel from '../../components/container/AppCarousel'
import TrendingAnime from '../../components/container/TrendingAnime'

const Home: React.FC = () => {
  const { data } = useGetAnimeList()

  return (
    <>
      <div>
        {data && <AppCarousel spotlightAnimes={data.spotlightAnimes} />}
        {data && <TrendingAnime trendingAnimes={data.trendingAnimes} />}
        <Outlet />
      </div>
    </>
  )
}

export default Home
