import React from 'react'
import { Outlet } from 'react-router-dom'
import useGetAnimeList from './use_get_anime_list'

const Home: React.FC = () => {
  const { data } = useGetAnimeList()

  console.log('sadadsadsadsadasd', data)
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
