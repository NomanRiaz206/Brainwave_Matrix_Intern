import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const data = [
    "./images/slider1.1.webp",
     "./images/slider1.2.webp",
     "./images/slider1.1.webp"
   
];

const items= data.map((x,i)=>{
    return <img key={i} src={x} alt={'Slide ${i+1}'}
    className='img-fluid'/>
});


const Slider = () => {
  return (
    <div className="container-fluid">

    <AliceCarousel
        items={items}
        autoPlay
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlayInterval={2000}
        
    />
    

      
    </div>
  )
}

export default Slider; 