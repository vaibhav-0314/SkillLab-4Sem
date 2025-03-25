import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Sports from "./pages/Sports";
import Events from "./pages/Events";
import SeatSelection from "./components/SeatSelection";
import Login from "./components/Login"; // Import Login Component
import Offers from "./components/Offers"; // Import the Offers component
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
          <Route path="/sports" element={<Sports />} />
          <Route path="/events" element={<Events />} />
          <Route path="/seatselection" element={<SeatSelection />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/offers" element={<Offers />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/movies" element={<MovieList />} />
  <Route path="/book/:movieName" element={<Booking />} />

{/* Add this line */}
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
