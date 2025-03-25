import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../styles/Booking.css";


const Booking = () => {
  const { id } = useParams(); // Get the movie/event ID from URL
  const [seats, setSeats] = useState(1);

  const handleBooking = () => {
    alert(`Successfully booked ${seats} seat(s) for Event ID: ${id}`);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <div className="glass-container p-4 text-center">
        <h2 className="mb-4">Book Your Tickets 🎟️</h2>
        
        {/* Seat Selection */}
        <Form>
          <Form.Label><strong>Select Seats:</strong></Form.Label>
          
          <InputGroup className="justify-content-center mb-3">
            <Button variant="outline-light" onClick={() => setSeats(Math.max(1, seats - 1))}>−</Button>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={seats}
              onChange={(e) => setSeats(Math.min(10, Math.max(1, Number(e.target.value))))}
              className="text-center"
              style={{ width: "60px", background: "transparent", color: "inherit" }}
            />
            <Button variant="outline-light" onClick={() => setSeats(Math.min(10, seats + 1))}>+</Button>
          </InputGroup>

          {/* Confirm Button */}
          <Button variant="success" className="w-100" onClick={handleBooking}>
            Confirm Booking
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Booking;
