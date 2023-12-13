import { useQuery } from 'react-query'

export default function useGetAnimeList() {
  const { data, isLoading } = useQuery({
    queryKey: ['anime_list'],
    queryFn: async () => {
      const res = await fetch('https://api-aniwatch.onrender.com/anime/home')

      return res.json()
    },
  })

  return {
    data,
    isLoading,
  }
}
