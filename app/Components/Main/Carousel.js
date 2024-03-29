"use client"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const CarouselComponent = () => {
  return (
    <div id='Carousel-div'>
    <Carousel>
      {/* Carousel items */}
      <Carousel.Item>
        <img
        id='Carousel'
          className="d-block w-100 carousel-img"
          src="/Images/3000pc._CB580474950_.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='Carousel'
          className="d-block w-100"
          src="/Images/Getfit-days-3000-UN-REC-PC._CB561235673_.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='Carousel'
          className="d-block w-100"
          src="/Images/PC_GW_Hero_3000x1200_01._CB579486410_.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
