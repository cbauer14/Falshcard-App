import React, { useState, useEffect } from "react";
import { createCard, readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import CardForm from "./CardForm";
import BreadCrumb from "../components/Breadcrumb";

function CreateCard() {
     //set initial form state
    const initialFormState = {
        front: "",
        back: "",
    }
    //set formData state
    const [card, setCard] = useState({ ...initialFormState });
    const [deck, setDeck] = useState([]);
    
    const { deckId } = useParams();

    //Track deck id to add to card
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



    //handle changes to form input
    const handleFormChange = ({ target }) => {
        setCard({
            ...card,
            [target.name]: target.value,
            deckId,
        });
    }

    //handle when Submit gets clicked
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCard(deckId, card)
        setCard({ ...initialFormState })
    };

    return (
        <>
          <BreadCrumb deck={deck}/>
            <h1>{`${deck.name}: Add Card`}</h1>
            <CardForm formData={card}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit} 
                deck={deck} />
        </>    
    )
}

export default CreateCard;