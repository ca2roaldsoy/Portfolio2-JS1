import React from "react";
import { Row, Col } from "react-bootstrap";
import DropDown from "./DropDown";

function About() {
  return (
    <Row className="about">
      <Col sm={12}>
        <h2>About</h2>
        <p className="about__text">
          First published in 1993 by Wizards of the Coast, Magic was the first
          trading card game produced and it continues to thrive, with
          approximately twenty million players as of 2015. Magic can be played
          by two or more players in various formats, which fall into one of two
          categories: constructed or limited. Limited formats involve players
          building a deck spontaneously out of a pool of random cards with a
          minimum deck size of 40 cards. The other major category of formats is
          constructed. In constructed, players created decks from cards they
          own, usually 60 cards with no more than 4 of any given card. Magic is
          played in person with printed cards, or using a deck of virtual cards
          through the Internet-based Magic: The Gathering Online, or on a
          smartphone or tablet, or through other programs.
        </p>
        <p className="about__text">
          Each game represents a battle between wizards known as
          "planeswalkers", who employ spells, artifacts, and creatures depicted
          on individual Magic cards to defeat their opponents. Although the
          original concept of the game drew heavily from the motifs of
          traditional fantasy role-playing games such as Dungeons Dragons, the
          gameplay of Magic bears little similarity to pencil-and-paper
          adventure games, while having substantially more cards and more
          complex rules than many other card games.
        </p>
        <p className="about__text">
          New cards are released on a regular basis through expansion sets. An
          organized tournament system played at an international level and a
          worldwide community of professional Magic players has developed, as
          well as a substantial secondary market for Magic cards. Certain Magic
          cards can be valuable due to their rarity and utility in game play,
          with prices ranging from a few cents to thousands of dollars.
        </p>

        <DropDown />
      </Col>
    </Row>
  );
}

export default About;
