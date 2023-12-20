import { useParams } from 'react-router-dom'
import useGetAnimeInfo from './use_get_anime_info'

export default function AnimeInfoPage() {
  const { animeId } = useParams()
  const { data } = useGetAnimeInfo({ animeId: animeId ?? '' })

  console.log(data)

  return <div>anime info page</div>
}
