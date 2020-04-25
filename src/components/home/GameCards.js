import React from "react";
import PropTypes from "prop-types";
import { Col, Card, CardImg, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function GameCards({ name, image, id }) {
  return (
    <Col sm={6} lg={4} as="section">
      <Card>
        <Link to={"cards/" + id}>
          <Card.Title className="card__title">{name}</Card.Title>
          <Card.Body>
            <CardImg src={image} alt={name} role="img" />
            <Button variant="success" className="card__button" role="button">
              View More
            </Button>
          </Card.Body>
        </Link>
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
