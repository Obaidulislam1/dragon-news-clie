import React from 'react';
import { Carousel } from 'react-bootstrap';
import carusel1 from '../../assets/brands/download1.jpg'
import carusel2 from '../../assets/brands/download2.jpg'
import carusel4 from '../../assets/brands/download4.jpg'

const Carosel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carusel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carusel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carusel4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Carosel;