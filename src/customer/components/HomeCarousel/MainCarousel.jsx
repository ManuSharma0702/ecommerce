import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const items = mainCarouselData.map((item) => <img className='cursor-pointer' src={item.image} role='presentation' alt=""/> )

const MainCarousel = () => (
    <AliceCarousel
        autoPlay
        items={items}
        infinite
        autoPlayInterval={1000}
        disableButtonsControls
    />
);

export default MainCarousel