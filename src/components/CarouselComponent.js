import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css"; 
import book from "./book.avif";
import book3 from "./book3.avif";
import bookmyshow1 from "./bookmyshow1.avif";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel indicators={false} interval={3000} className="custom-carousel">
        
        <Carousel.Item>
          <img className="d-block w-100" src={book} alt="First slide" />
          <Carousel.Caption>
   
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={book3} alt="Second slide" />
          <Carousel.Caption>
            <h3>Live Concerts & Events</h3>
            <p>Don't miss out on spectacular live performances in your city.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={bookmyshow1} alt="Third slide" />
          <Carousel.Caption>
            <h3>Exciting Sports Matches</h3>
            <p>Get ready to cheer for your favorite teams at thrilling live matches!</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default CarouselComponent;
