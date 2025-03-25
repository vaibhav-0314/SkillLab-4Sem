import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";


const sportsEvents = [
  { name: "IPL 2025", image: "https://imgs.search.brave.com/No-nlmkQDzwOgZOTs1wPz30Srqm4PRVscF4TUCQ-T4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmL2Fh/LzU1LzhmYWE1NWQ4/ZDRjNWUwNzg5Mjlm/MWIwZjBmOTdkZTc5/LmpwZw", date: "March 2025" },

  { name: "FIFA Club World Cup", image: "https://th.bing.com/th/id/OIP.La8JviYnIqzgZEEtUo6bVgHaEK?rs=1&pid=ImgDetMain", date: "November 2025" },

  { name: "UEFA Women's Euro 2025", image: "https://imgs.search.brave.com/rPB823WPrV_4Rw-F8BYYC_ChFv2X1YMfRksfLMv1Wms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29hbC5jb20v/aW1hZ2VzL3YzL2Js/dDlmNGJmNGZmZWUx/ZjI5OGYvY3JvcC9N/TTVERU1CVUhBNURD/TUpWR0k1RzQzM1hN/VTVEQ09SUS9mYmwt/dWVmYS13b21lbi1l/dXJvLTIwMjUuYXZp/Zj9hdXRvPXdlYnAm/Zm9ybWF0PXBqcGcm/d2lkdGg9Mzg0MCZx/dWFsaXR5PTYw", date: "July 2025" },
  
  { name: "Men's Volleyball World Championship", image: "https://imgs.search.brave.com/gpnBRYFM-UoWucVAThnsdVIFnEuOi4P9BF-bONSuRt4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OC84ZS8yMDI1X0ZJ/VkJfTWVuJTI3c19W/b2xsZXliYWxsX1dv/cmxkX0NoYW1waW9u/c2hpcF9sb2dvLnBu/Zy81MTJweC0yMDI1/X0ZJVkJfTWVuJTI3/c19Wb2xsZXliYWxs/X1dvcmxkX0NoYW1w/aW9uc2hpcF9sb2dv/LnBuZw", date: "July 2025" },
];

const Sports = () => {
  return (
    <Container className="mt-4">
      <h2>Sports Events</h2>
      <Row>
        {sportsEvents.map((event, index) => (
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


export default Sports;
