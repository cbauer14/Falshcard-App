import React from "react"
import { listDecks } from "../../utils/api";
import { useState, useEffect } from "react";
import DeckHomeView from "./DeckHomeView";


function DeckList() {
  
    const [decks, setDecks] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();
    
        async function getDeckList() {
          try {
            const list = await listDecks(abortController.signal)
    
            setDecks(list);
          } catch (error) {
            if (error.name !== "AbortError") {
              console.error(error);
            }
          }
        }
    
        getDeckList();
    
        return () => {
          abortController.abort();
        };
      }, []);

    const deckList = decks.map((deck) => (
        <DeckHomeView key={deck.id} deck={deck} />

    ));

    return (
        <div>
            {deckList}
        </div>
    )
}

export default DeckList;