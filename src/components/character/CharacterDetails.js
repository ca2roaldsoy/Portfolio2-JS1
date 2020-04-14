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

  if (detail.imageUrl === undefined) {
    detail.imageUrl = "none";
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
        <ListGroup>
          <ListGroupItem className="character__imgUrl">
            <b>Image:</b> {detail.imageUrl}
          </ListGroupItem>
          <ListGroupItem className="character__text">
            <b>Text:</b> {detail.text}
          </ListGroupItem>
          <ListGroupItem className="character__rarity">
            <b>Rarity:</b> {detail.rarity}
          </ListGroupItem>
          <ListGroupItem className="character__color">
            <b>Colors:</b> {detail.colors}
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default CharacterDetail;
