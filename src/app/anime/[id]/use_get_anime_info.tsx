import { useQuery } from 'react-query'

export default function useGetAnimeInfo({ animeId }: { animeId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['anime_info'],
    queryFn: async () => {
      const res = await fetch(
        `https://api-aniwatch.onrender.com/anime/info?id=${animeId}`
      )

      return res.json()
    },
    enabled: !!animeId,
  })

  return {
    data,
    isLoading,
  }
}
