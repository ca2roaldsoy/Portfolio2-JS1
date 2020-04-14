import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardImg, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function GameCards({ name, image, id }) {
  return (
    <Col lg={4}>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Body>
          <CardImg src={image} />
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

GameCards.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default GameCards;
