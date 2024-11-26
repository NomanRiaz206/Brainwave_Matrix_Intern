
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; 

const categories = [
  { title: 'UNSTITCHED', imageUrl: '/images/SC1.webp' },
  { title: 'READY TO WEAR', imageUrl: '/images/SC2.1.webp' },
  { title: 'MAN', imageUrl: '/images/SC3.webp' },
  { title: 'WEST', imageUrl: '/images/SC4.webp' },
  { title: 'KIDS', imageUrl: '/images/SC5.webp' },
  { title: 'BEAUTY', imageUrl: '/images/SC6.webp' },
  { title: 'MODEST WEAR', imageUrl: '/images/SC7.webp' },
  { title: 'HOME ', imageUrl: '/images/SC8.webp' },
  { title: 'ACCESSORIES', imageUrl: '/images/SC9.webp' },
];

const ShopCategories = () => {
  return (
    <div className="container mx-auto py-8">
   
      <div className="bg-white p-4 mx-auto text-center max-w-xs border-b mb-3">
        <h2 className="text-lg font-bold">SHOP BY CATEGORY</h2>
      </div>

    
      <Swiper
        modules={[Navigation]} 
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
        }}
        navigation
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.title}>
            <div className="relative group mt-5">
           
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
              />

              <div className="text-center mt-2">
                <span className="text-lg font-semibold text-gray-800">
                  {category.title}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopCategories;
