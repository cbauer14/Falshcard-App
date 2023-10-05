import React, { useState, useEffect } from "react";
import { readCard, updateCard, readDeck,  } from "../../utils/api";
import { useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";
import BreadCrumb from "../components/Breadcrumb";

function EditCard() {

    const [card, setCard] = useState({});
    const [deck, setDeck] = useState([]);
    
    //get ids from url
    const { deckId, cardId } = useParams();
    const history = useHistory();

    
    console.log("card deck", card)

    //handle changes to form input
    const handleFormChange = ({ target }) => {
        setCard({
            ...card,
            [target.name]: target.value,
        });
    }

    //handle when Submit gets clicked
    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCard(card);
        history.push(`/decks/${deck.id}`)
    };

   //Track deck id and card id
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

    async function getCard() {
      try {
        const getCardById = await readCard(cardId, abortController.signal)
        setCard(getCardById)
      }
      catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    getDeck();
    getCard();

    return () => {
      abortController.abort();
    };
  }, [deckId, cardId]);

    return (
        <>
          <BreadCrumb deck={deck} card={card}/>
            <h1>{`${deck.name}: Edit Card`}</h1>
            <CardForm 
                formData={card}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit} 
                deck={deck} />
        </>    
    )
}

export default EditCard;