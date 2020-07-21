import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img0 from './img0.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';

export default function CarouselsTest() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img0}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}