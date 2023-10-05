import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import DeleteBtn from "../components/DeckDeleteBtn";
import AddCardBtn from "../components/AddCardBtn";
import CardList from "../cards/CardList";
import BreadCrumb from "../components/Breadcrumb";


function Deck() {

  const { deckId } = useParams();
  const { url } = useRouteMatch();

  const [deck, setDeck] = useState([]);
 
  useEffect(() => {
    const abortController = new AbortController();

    async function getDeck() {
      try {
        const getDeckById= await readDeck(deckId, abortController.signal)

        setDeck(getDeckById);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }
    getDeck();

    return () => {
      abortController.abort();
    };
  }, [deckId]);
    
      return (
        <div>
            <BreadCrumb deck={deck}/>
              <div className="container">
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <Link to={`${url}/study`}><button className="btn btn-primary" type="button">Study</button></Link>
                <AddCardBtn deck={deck} />
                <Link to={`${url}/edit`}><button className="btn btn-secondary" type="button">Edit</button></Link>
                <DeleteBtn deck={deck}/>
            </div>
            <h2>Cards</h2>
                  <ul>
                    <CardList cards={deck.cards}/>
                  </ul>
                </div>
            
    )
}

export default Deck;