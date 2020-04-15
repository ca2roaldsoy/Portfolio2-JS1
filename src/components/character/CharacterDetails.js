import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { GameUrl } from "../../constants/api";

function CharacterDetail() {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url = GameUrl + "/" + id;

  useEffect(
    function () {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setDetail(data.card);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    },
    [url]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Row className="mt-3 character">
      <Col lg={4} sm={12} className="mb-3">
        <img
          src={detail.imageUrl}
          alt={detail.name}
          className="character__img"
        />
      </Col>
      <Col lg={8} sm={12}>
        <h1>{detail.name}</h1>
        <ListGroup variant="flush">
          <ListGroupItem>
            <b>Rarity:</b> {detail.rarity}
          </ListGroupItem>
          <ListGroupItem>
            <b>Color:</b> {detail.colors}
          </ListGroupItem>
          <ListGroupItem>
            <b>Text:</b> {detail.text}
          </ListGroupItem>
          <ListGroupItem>
            <b>ImageUrl:</b> {detail.imageUrl}
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default CharacterDetail;
