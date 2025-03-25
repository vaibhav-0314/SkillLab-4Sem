import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/MovieList.css"; // Import the CSS file
import { Link } from "react-router-dom";
const movies = [
  { 
    name: "Spider-Man", 
    genre: "Action", 
    release: "2023-05-10", 
    rating: "8.5", 
    price: "₹1000", 
    image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/259ac589598c8653010bcc12551e3dda_ba9bd34b-9525-4d12-bda4-23f97dfc4d24_500x749.jpg?v=1639684618" 
  },
  { 
    name: "Oppenheimer", 
    genre: "Drama", 
    release: "2023-07-21", 
    rating: "9.2", 
    price: "₹1200", 
    image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/oppenheimer_9bfmjtpu_500x749.jpg?v=1690469457"
    },
  { 
    name: "DAREDEVIL", 
    genre: "Comedy", 
    release: "2025-03-04", 
    rating: "8.8", 
    price: "₹800", 
    image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/daredevil-born-again_yoktke3d_500x749.jpg?v=1739551545" 
  },
  { 
    name: "JURASSIC WORLD", 
    genre: "Adventure", 
    release: "2023-07-02", 
    rating: "9.8", 
    price: "₹950", 
    image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/jurassic-world-rebirth_6gyim32q_500x749.jpg?v=1739552244" 
  },
  { 
    name: "SUPERMAN", 
    genre: "Action", 
    release: "2023-07-11", 
    rating: "8.8", 
    price: "₹620", 
    image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/superman_onrsxgbh_500x749.jpg?v=1739376791" 
  },
  { 
    name: "Godfather", 
    genre: "Crime", 
    release: "2023-07-21", 
    rating: "8.8", 
    price: "₹450", 
    image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-godfather_k9z3jipv_500x749.jpg?v=1670518644" 
  },
];

const MovieList = () => {
  return (
    <Container className="movie-container mt-4">
  <Row className="g-4"> {/* Add gap between rows */}
    {movies.map((movie, index) => (
      <Col key={index} md={4}>
        <Card className="movie-card">
          <Card.Img variant="top" src={movie.image} className="movie-img" />
          <div className="movie-info">
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>
                <strong>Genre:</strong> {movie.genre} <br />
                <strong>Release Date:</strong> {movie.release} <br />
                <strong>Ratings:</strong> {movie.rating} <br />
                <strong>Price:</strong> {movie.price}
              </Card.Text>
              <Button variant="primary" as={Link} to={`/book/${movie.name}`}>
  Book Now
</Button>
            </Card.Body>
          </div>
        </Card>
      </Col>
    ))}
      <div style={{ height: "50px", width: "100%" }}></div>
  </Row>
</Container>

    
  );
};

export default MovieList;
