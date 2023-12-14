import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../index.css';
import { Autoplay, Pagination } from 'swiper/modules';

interface AppCarouselProps {
  spotlightAnimes: {
    id: string;
    name: string;
    poster: string;
    description: string;
    rank: number;
    otherInfo: string[];
    episodes: {
      sub: number;
      dub: number;
    };
  }[];
}

function AppCarousel({ spotlightAnimes }: AppCarouselProps) {
  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000
      }}
      className="mySwiper font-sans relative"
    >
      {spotlightAnimes.map(anime => (
        <SwiperSlide key={anime.id}>
          <div className='relative'>
            <div className='gradient-overlay absolute top-0 left-0 w-full h-full' />
            <img
              src={anime.poster}
              alt={anime.name}
              className='object-cover w-full h-[55vh] md:h-[80vh]'
            />
            <div className="absolute bottom-0 left-0 p-4 carousel-text text-light">
              <h2 className='spotlight'>Spotlight #{anime.rank}</h2>
              <h1 className='anime-name py-2'>{anime.name}</h1>
              <div className='flex-center px-2 py-2'>
                {anime.otherInfo.map((info, index) => (
                  <div className='flex-center' key={index}>
                    <div className={getIconClassName(index)} />
                    <span className='px-2'>{info}</span>
                  </div>
                ))}
              </div>
              <p className='w-100 md:w-150 line-clamp-2 md:line-clamp-3'>{anime.description}</p>
              <div className='py-5'>
                <button className='flex-center btn-orange transition'>
                  <div className='i-carbon-play-filled mr-2' />
                  <p>Watch Now</p>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function getIconClassName(index: number): string {
  const iconClasses = [
    'i-mdi-television-play',
    'i-carbon-recently-viewed',
    'i-carbon-calendar'
  ];
  return iconClasses[index] + ' flex-center text-light px-2';
}

export default AppCarousel;
