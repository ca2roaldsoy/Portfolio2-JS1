import React, { useState, useEffect } from "react";
import { GameUrl } from "../../constants/api";
import Loading from "../loading/Loading";
import Search from "./Search";
import CardDeck from "react-bootstrap/CardDeck";
import GameCards from "./GameCards";

function Home() {
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetch(GameUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCards(data.cards);
        setFilterCards(data.cards);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const SearchField = (e) => {
    const lowerValue = e.target.value.toLowerCase();
    const filterSearch = cards.filter((card) => {
      if (card.name.toLowerCase.indexOf(lowerValue) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    setFilterCards(filterSearch);
  };

  if (loading) {
    return <Loading />;
  }

  function searchResult() {
    if (filterCards.length === 0) {
      return (
        <section className="[ errorMsg ]">
          <h4 className="[ errorMsg__title ]">Sorry. No result :( </h4>
          <p className="[ errorMsg__title--text ]">
            Please try another search :)
          </p>
        </section>
      );
    }

    return filterCards.map((card) => {
      let { name, imageUrl, id } = card;

      if (imageUrl === undefined) {
        imageUrl = "https://via.placeholder.com/223x310";
      }

      return <GameCards key={id} name={name} image={imageUrl} id={id} />;
    });
  }

  return (
    <>
      <Search SearchField={SearchField} role="search" />
      <CardDeck as="main" role="main">
        {searchResult()}
      </CardDeck>
    </>
  );
}

export default Home;
