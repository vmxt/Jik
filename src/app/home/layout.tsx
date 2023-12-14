import React from 'react'
import { Outlet } from 'react-router-dom'
import useGetAnimeList from './use_get_anime_list'

import AppCarousel from '../../components/misc/AppCarousel'

const Home: React.FC = () => {
  const { data } = useGetAnimeList()

  return (
    <>
      <div>
        {data && <AppCarousel spotlightAnimes={data.spotlightAnimes} />}
        <Outlet />
      </div>
    </>
  )
}

export default Home
