import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';



const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
    const items = [1, 2, 3, 4, 5, 6].map((item) => <HomeSectionCard/>);
  return (
    <div className='container'>
    <div>
        <AliceCarousel
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />

    </div>
    </div>
  )
}

export default HomeSectionCarousel