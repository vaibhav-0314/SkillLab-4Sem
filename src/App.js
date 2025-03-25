import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Sports from "./pages/Sports";
import Events from "./pages/Events";
import SeatSelection from "./components/SeatSelection";
import Login from "./components/Login";
import Offers from "./components/Offers";
import Booking from "./pages/booking";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/list" element={<MovieList />} /> {/* Nested route */}
          <Route path="/sports" element={<Sports />} />
          <Route path="/events" element={<Events />} />
          <Route path="/seatselection" element={<SeatSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/book/:movieName" element={<Booking />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
