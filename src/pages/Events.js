import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/CardStyles.css"; // Import CSS file

const events = [
  { name: "Music Concert", image: "https://imgs.search.brave.com/LGvLRdPs-eS8JEN1vR-bjVHJtI-ueLQB08oNOStJO_4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzk2LzU2LzY1/LzM2MF9GXzk5NjU2/NjU4MV9YcUZrOEpK/RGMwcld6QXlCUW4x/QXFHSTY3TmljTnJi/bS5qcGc", date: "March 2025" },
  { name: "Stand-up Comedy", image: "https://imgs.search.brave.com/rlynefZFcvvurb0bDSGLIjN4QoFFQUIdUEDZJG_PxeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM5LzI1LzI2/LzM2MF9GXzIzOTI1/MjYwOF9veENta0ha/MXVncU9QZjY0Njh4/TzIyV2FjVHowSkJQ/eC5qcGc", date: "May 2025" },
];

const Events = () => {
  return (
    <Container className="mt-4">
      <h2>Upcoming Events</h2>
      <Row>
        {events.map((event, index) => (
          <Col key={index} md={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>Date: {event.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
