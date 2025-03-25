import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/MovieCarousel.css"; // Import CSS for styling

const MovieCarousel = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img className="carousel-image" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1742548134606_parthenopeweb.jpg" alt="Movie 1" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1742538601736_anoraweb.jpg" alt="Movie 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726038890736_playcardnewweb.jpg" alt="Movie 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
