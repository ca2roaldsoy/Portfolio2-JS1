import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function DropDown() {
  let eKey = 0;

  return (
    <Accordion className="dropDown" as="aside">
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={eKey}
          className="dropDown__header"
        >
          DEFEAT YOUR OPPONENT
          <FontAwesomeIcon
            icon={faAngleDown}
            className="dropDown__header--arrow"
          />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={eKey}>
          <Card.Body>
            <Card.Text className="dropDown__header--text">
              Each player starts the game with 20 life. Knock your opponent down
              to 0 life, and you win. The most common way to do this is to
              summon creatures and attack with them.
            </Card.Text>
            <Card.Text className="dropDown__header--text">
              Creature cards are the most important part of many Magic decks.
              They’re really easy to spot—just look at the lower right of a
              card. If you see a pair of numbers separated by a slash, you’ve
              got a creature card. Once it’s on the battlefield, a creature
              continues to attack and defend for you until your opponent can
              find a way to take it out.
            </Card.Text>
            <Card.Text className="dropDown__header--text">
              Most games become a race to see who can deal the most damage
              first. Summoning the best creatures will help you win that race
              every time. Check out the section on casting creature spells.
            </Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default DropDown;
