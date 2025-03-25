import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/offerstyles.css";
const offers = [
  {
    title: "50% Off on Movie Tickets",
    description: "Use code MOVIE50 to get a 50% discount on your next movie booking.",
    image: "https://as1.ftcdn.net/v2/jpg/01/76/43/98/1000_F_176439812_sw6BdTvGPbsOrzUIbA167xoXbNPSUqGD.jpg",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "Grab two tickets for the price of one. Limited time offer!",
    image: "https://as1.ftcdn.net/v2/jpg/02/47/94/38/1000_F_247943874_wOB2aMajnlU1xlP3Q1nzhs6SSnhxDoMz.jpg"
  },
  {
    title: "20% Cashback on Payments",
    description: "Pay with XYZ wallet and get 20% cashback on your purchase.",
    image: "https://as2.ftcdn.net/v2/jpg/03/13/59/85/1000_F_313598574_O0y0JAVOaZjVuNoq8wiG9zPJUinNbtMq.jpg",
  },
];

const Offers = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🎉 Exciting Offers</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card className="offer-card">
              <Card.Img variant="top" src={offer.image} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
