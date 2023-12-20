import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface TrendingAnimeProps {
  trendingAnimes: {
    id: string;
    name: string;
    poster: string;
    rank: number;
  }[];
}

const TrendingAnime: React.FC<TrendingAnimeProps> = ({ trendingAnimes }) => {
  return (
    <div className="px10 py10">
      <h1 className="text-2xl text-orange font-semibold">Trending Animes</h1>
      <Swiper
        className="swiper"
        slidesPerView={3}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1080: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {trendingAnimes.map((anime, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="slide-content py10">
              <div className="relative">
                <img
                  src={anime.poster}
                  alt={anime.name}
                  className="w-full h-auto object-cover w[190px] h[290px] mx-auto"
                />
                <div className="flex items-center justify-center p3">
                  <h1 className="mr3 text-xl md:text-2xl font-bold text-yellow-500">
                    {anime.rank}
                  </h1>
                  <h1 className="truncate text-md md:text-xl font-bold">{anime.name}</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingAnime;
