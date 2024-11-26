import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'react-alice-carousel/lib/alice-carousel.css';


library.add(fas);
import Navbar from './Components/Navbar'
import Logobar from './Components/Logobar'
import Slider from './Components/Slider';
import Whatsnew from './Components/Whatsnew';
import ShopCategories from './Components/CategorySlider';
import TrendingProducts from './Components/Trending';
import MoreToExplore from './Components/Moretoexplore';
import StyledByYou from './Components/Styledbyyou';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
  
    <Logobar/>
    <Navbar/>
    <Slider/>
    <Whatsnew/>
   <ShopCategories/>
   <TrendingProducts/>
   <MoreToExplore/>
    <StyledByYou/>
    <Footer/>
    </div>
  )
}

export default App
