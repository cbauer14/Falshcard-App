import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateDeck, readDeck } from "../../utils/api";
import DeckForm from "./DeckForm";
import BreadCrumb from "../components/Breadcrumb";


function EditDeck() {
    
    //set state
    const [deck, setDeck] = useState({});
    const { deckId } = useParams();
    const history = useHistory();
    
    //handle changes to form input
    const handleFormChange = ({ target }) => {
        setDeck({
            ...deck,
            [target.name]: target.value,
        });
    }

    //handle when Submit gets clicked
    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateDeck(deck)
        history.push(`/decks/${deck.id}`)
    };
    
    
  //get deck info
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
            <h1>Edit Deck</h1>
            <DeckForm
                formData={deck}
                handleFormChange={handleFormChange}
                handleSubmit={handleSubmit}
                />
        </div>
    )
}

export default EditDeck;