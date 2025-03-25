import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/MovieCarousel.css"; // Import CSS for styling

const MovieCarousel = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img className="carousel-image" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/chhaava-et00408691-1737623374.jpg" alt="Movie 1" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1742876499017_1240x300travisscott2025regionalnewdelhipresale.jpg" alt="Movie 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1726038890736_playcardnewweb.jpg" alt="Movie 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;








