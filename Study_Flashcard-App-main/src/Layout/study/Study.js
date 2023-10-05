import React, {useState, useEffect } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyCard from "./StudyCard";
import AddCardBtn from "../components/AddCardBtn";
import BreadCrumb from "../components/Breadcrumb";

function Study() {
    const history = useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState([]);
    const [card, setCard] = useState({});
    const [deckLength, setDeckLength] = useState(0);
    const [cardNumber, setCardNumber] = useState(1);
    const [isFlipped, setIsFlipped] = useState(false);
    
    //get deck info and store in state
    useEffect(() => {
        const abortController = new AbortController();
    
        async function getDeckInfo() {
          try {
            const getDeck= await readDeck(deckId, abortController.signal)
            setDeck(getDeck);
            setCard(getDeck.cards[0]);
            setDeckLength(getDeck.cards.length);
            setIsFlipped(false);

          } catch (error) {
            if (error.name !== "AbortError") {
              console.error(error);
            }
          }
        }
        getDeckInfo();

        return () => {
          abortController.abort();
        };
      }, [deckId]);

      //define card position
      const handleFlip = () => {
        setIsFlipped(!isFlipped) 
     }

     //handle card flip
      const handleNextCard = () => {
        setIsFlipped(!isFlipped);
        setCardNumber(cardNumber + 1);
        if (cardNumber !== deckLength) {
            setCard(deck.cards[cardNumber])
        } else {
            const response = window.confirm("Restart cards? Click 'cancel' to return to the home page");
            if (!response) {
                history.push("/");
            } else {
                setIsFlipped(false);
                setCardNumber(1);
                setCard(deck.cards[1]);
            }
        }
    }

if (deckLength < 3) {
    return (
        <div>
          <BreadCrumb deck={deck}/>
          <h1>Study: {deck.name}</h1>
          <h3>Not enough cards in deck</h3>
          <AddCardBtn deck={deck}/>
        </div>
        );
    }

    return (
      <div>
        <BreadCrumb deck={deck}/>
        <h1>Study: {deck.name}</h1>
          <StudyCard 
              deck={deck} 
              card={card}
              cardNumber={cardNumber}
              deckLength={deckLength} 
              isFlipped={!isFlipped} 
              handleFlip={handleFlip}
              handleNextCard={handleNextCard}/>
      </div>
    )
    
}

export default Study;