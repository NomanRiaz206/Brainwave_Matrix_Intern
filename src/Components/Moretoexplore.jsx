import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay} from 'swiper/modules';

const exploreItems = [
  {

    imageUrl: '/images/MX1.webp',
  },
  {
 
    imageUrl: '/images/MX2.webp',
  },
  {
  
    imageUrl: '/images/MX3.webp',
  },
  {
 
    imageUrl: '/images/MX4.webp',
  },
  {
 
    imageUrl: '/images/MX5.webp',
  },
  {
   
    imageUrl: '/images/MX6.jpg',
  },
  
];

const MoreToExplore = () => {
  return (
    <div className="container mx-auto py-8 relative">
      
      <div className="bg-white p-4 mx-auto text-center max-w-xs border-b mb-4">
        <h2 className="text-lg font-bold">MORE TO EXPLORE</h2>
      </div>

      
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {exploreItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="swiper-button-prev absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 cursor-pointer"
        style={{ color: '#000' }}
      ></div>
      <div
        className="swiper-button-next absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 cursor-pointer"
        style={{ color: '#000' }}
      ></div>
    </div>
  );
};

export default MoreToExplore;
