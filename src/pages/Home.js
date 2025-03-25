import React from "react";
import MyCarousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <MyCarousel />
      <h2 className="text-center mt-4">Welcome to BookMyShow 2.0</h2>
      <p className="text-center">Discover movies, events, and sports near you!</p>
    </div>
  );
};

export default Home;
