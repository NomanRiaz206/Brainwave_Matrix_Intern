// import React from 'react';

// const StyledByYou = () => {
//   return (
//     <div className="bg-orange-100 py-8 mb-9">
//       <div className="container mx-auto">
       
//         <h2 className="text-2xl font-bold mb-4 text-center">STYLED BY YOU</h2>
//         <h2 className="text-lg font-bold mb-4 text-center">#SAPHHIREXME</h2>
//         <div className="grid d-flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div>
//           <img src="/images/SU1.webp" alt="Fest New Arrivals" className="w-full h-72 object-cover" />
//           <h2 className="text-lg font-bold mb-4 text-center" >Trending Wear</h2>
//           </div>
//           <img src="/images/SU2.webp" alt="Threads of Tradition" className="w-full h-72 object-cover" />
//           <img src="/images/SU3.webp" alt="Styled By You" className="w-full h-72 object-cover" />
//           <img src="/images/SU4.webp" alt="Styled By You" className="w-full h-72 object-cover" />
//           <img src="/images/Su5.webp" alt="Styled By You" className="w-full h-72 object-cover" />
//           <img src="/images/SU6.webp" alt="Styled By You" className="w-full h-72 object-cover" />
//           <img src="/images/Su7.webp" alt="Styled By You" className="w-full h-72 object-cover" />
//           <img src="/images/SU8.webp" alt="Styled By You" className="w-full h-72 object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StyledByYou;
// import React, { useRef } from "react";

// const StyledByYou = () => {
//   const sliderRef = useRef(null);

//   // Scroll slider to the left
//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({
//       left: -300,
//       behavior: "smooth",
//     });
//   };

//   // Scroll slider to the right
//   const scrollRight = () => {
//     sliderRef.current.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="bg-yellow-50 py-10">
//       {/* Section Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-2xl font-bold">STYLED BY YOU</h2>
//         <p className="text-gray-600">#SAPPHIREXME</p>
//       </div>

//       {/* Carousel Container */}
//       <div className="relative container mx-auto">
//         {/* Left Arrow */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
//         >
//           <i className="fas fa-chevron-left"></i>
//         </button>

//         {/* Product Slider */}
//         <div
//           ref={sliderRef}
//           className="flex overflow-x-scroll space-x-6 scrollbar-hide px-4"
//         >
//           {/* Example Product Cards */}
//           {[
//             {
//               name: "Eyeina Shahzad",
//               handle: "@eyeina.shahzad",
//               description: "3 Piece - Embroidered Cotton Net Suit",
//               img: "./images/SU1.webp",
//             },
//             {
//               name: "Hemayal Attique",
//               handle: "@hemayal",
//               description: "3 Piece - Embroidered Light Khaddar Suit",
//               img: "https://via.placeholder.com/300x400",
//             },
//             {
//               name: "Kiran Malik",
//               handle: "@kiran.malikofficial",
//               description: "3 Piece - Embroidered Cotton Net Suit",
//               img: "https://via.placeholder.com/300x400",
//             },
//             {
//               name: "Rafya Minhas Khan",
//               handle: "@rafyaminhas",
//               description: "3 Piece - Embroidered Khaddar Suit",
//               img: "https://via.placeholder.com/300x400",
//             },
//           ].map((product, index) => (
//             <div
//               key={index}
//               className="min-w-[300px] text-center flex-shrink-0"
//             >
//               <div className="relative">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="rounded-md object-cover h-72 w-full"
//                 />
//                 <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
//                   <i className="fas fa-shopping-bag text-gray-600"></i>
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
//               <p className="text-gray-600">{product.handle}</p>
//               <p className="text-sm text-gray-500 mt-2">{product.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={scrollRight}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
//         >
//           <i className="fas fa-chevron-right"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StyledByYou;


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

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation]} // Navigation for arrows
          spaceBetween={20} // Space between images
          slidesPerView={4} // Number of slides visible at once
          slidesPerGroup={4} // Move 4 images per navigation click
          loop={true} // Infinite loop of slides
          navigation // Enable left and right arrows
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides visible for smaller screens
              slidesPerGroup: 2, // 2 slides per navigation click
            },
            1024: {
              slidesPerView: 4, // 4 slides visible for larger screens
              slidesPerGroup: 4, // 4 slides per navigation click
            },
          }}
          className="mySwiper"
        >
          {/* Slide 1 */}
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
          {/* Slide 2 */}
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
          {/* Slide 3 */}
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
          {/* Slide 4 */}
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
