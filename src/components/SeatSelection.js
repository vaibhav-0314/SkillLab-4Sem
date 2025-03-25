import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./SeatSelection.css"; // Create this file for styling

const rows = 5;
const cols = 8;

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <Container className="mt-4">
      <h2>Select Your Seats</h2>
      <div className="seat-container">
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className="seat-row">
            {Array.from({ length: cols }).map((_, col) => {
              const seatNumber = `${row + 1}-${col + 1}`;
              return (
                <Button
                  key={seatNumber}
                  variant={selectedSeats.includes(seatNumber) ? "success" : "secondary"}
                  className="seat"
                  onClick={() => toggleSeat(seatNumber)}
                >
                  {seatNumber}
                </Button>
              );
            })}
          </div>
        ))}
      </div>
      <h5 className="mt-3">Selected Seats: {selectedSeats.join(", ") || "None"}</h5>
    </Container>
  );
};

export default SeatSelection;
