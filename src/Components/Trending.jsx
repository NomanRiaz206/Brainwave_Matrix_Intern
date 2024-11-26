import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const products = [
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd1.webp',
  },
  {
    title: 'EMBROIDERED COTTON SHIRT',
    category: 'Intermix New Arrivals',
    price: 'Rs.6,590.00',
    imageUrl: '/images/wd2.webp',
  },
  {
    title: 'EMBROIDERED COTTON SHIRT',
    category: 'Intermix New Arrivals',
    price: 'Rs.5,990.00',
    imageUrl: '/images/wd3.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd4.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd5.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd6.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd7.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd8.webp',
  },

  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd9.webp',
  },

  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd10.webp',
  },

  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd11.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd12.webp',
  },

];

const TrendingProducts = () => {
  return (
    <div className="container mx-auto py-8">
        <div className="bg-white p-4 mx-auto text-center max-w-xs border-b mb-4">
        <h2 className="text-lg font-bold">MORE TO EXPLORE</h2>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
        loop 
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4 flex items-center justify-between">

  <div>
    <h3 className="text-lg font-semibold">{product.title}</h3>
    <p className="text-gray-500">{product.category}</p>
    <p className="text-gray-800 font-bold">{product.price}</p>
  </div>

  <button className="py-1 text-sm mt-0 px-6 bg-black text-gray-300 rounded-md font-bold">
    ADD TO BAG
  </button>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingProducts;
