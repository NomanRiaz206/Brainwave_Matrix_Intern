
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const StyledByYou = () => {
  return (
    <div className="bg-orange-100 py-8 mb-9">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">STYLED BY YOU</h2>
        <h2 className="text-lg font-bold mb-4 text-center">#SAPHHIREXME</h2>

       
        <Swiper
          modules={[Navigation]} 
          spaceBetween={20} 
          slidesPerView={4} 
          slidesPerGroup={4} 
          loop={true} 
          navigation 
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2, 
            },
            1024: {
              slidesPerView: 4, 
              slidesPerGroup: 4, 
            },
          }}
          className="mySwiper"
        >
         
          <SwiperSlide>
            <div>
              <img
                src="/images/SU1.webp"
                alt="Fest New Arrivals"
                className="w-full h-72 object-cover"
              />
              <h2 className="text-lg font-bold mt-3 text-center">Eyeina Shahzad</h2>
              <p className='text-center text-sm'>@eyeinashahzad</p>
              <p className='text-center text-md'>wearing our <br/> 3 Piece-Embroidered Cotton Net Suit</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <img
              src="/images/SU2.webp"
              alt="Threads of Tradition"
              className="w-full h-72 object-cover"
            />
            <h2 className="text-lg font-bold mt-3 text-center">Hemayal Attique</h2>
              <p className='text-center text-sm'>@hemayal</p>
              <p className='text-center text-md'>wearing our <br/> 3 Piece-Embroidered Light Khaddar Suit</p>
          </SwiperSlide>
          
          <SwiperSlide>
            <img
              src="/images/SU3.webp"
              alt="Styled By You"
              className="w-full h-72 object-cover"
            />
            <h2 className="text-lg font-bold mt-3 text-center">Kiran Malik</h2>
              <p className='text-center text-sm'>@kira.malikofficial</p>
              <p className='text-center text-md'>wearing our <br/> 3 Piece-Embroidered Cotton Net Suit</p>
          </SwiperSlide>
        
          <SwiperSlide>
            <img
              src="/images/SU4.webp"
              alt="Styled By You"
              className="w-full h-72 object-cover"
            />
            <h2 className="text-lg font-bold mt-3 text-center">Rafya Minhas Khan</h2>
              <p className='text-center text-sm'>@rafyaminhas</p>
              <p className='text-center text-md'>wearing our <br/> 3 Piece-Embroidered Khaddar Suit</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/Su5.webp"
              alt="Styled By You"
              className="w-full h-72 object-cover"
            />
            <h2 className="text-lg font-bold mt-3 text-center">Sahar Hashmi</h2>
              <p className='text-center text-sm'>@saharblues</p>
              <p className='text-center text-md'>wearing our <br/> 3 Piece-Embroidered Light Khaddar Suit</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/SU6.webp"
              alt="Styled By You"
              className="w-full h-72 object-cover"
            />
            <h2 className="text-lg font-bold mt-3 text-center">Sheherbano Taseer</h2>
              <p className='text-center text-sm'>@bhindifries</p>
              <p className='text-center text-md'>wearing our <br/> 3-Piece-Embroidered Cottom Net Suit</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/Su7.webp"
              alt="Styled By You"
              className="w-full h-72 object-cover"
            />
            <h2 className="text-lg font-bold mt-3 text-center">Hania Amir</h2>
              <p className='text-center text-sm'>@haniaheheofficial</p>
              <p className='text-center text-md'>wearing our <br/> 3-Piece-Embroidered Dobby Suit</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/SU8.webp"
              alt="Styled By You"
              className="w-full h-72 object-cover"
            />
            <h2 className="text-lg font-bold mt-3 text-center">Eyeina Shahzad</h2>
              <p className='text-center text-sm'>@eyeinashahzad</p>
              <p className='text-center text-md'>wearing our <br/> 3-Piece-Embroidered Cotton  Net Suit</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default StyledByYou;
