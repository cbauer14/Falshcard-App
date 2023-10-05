import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeckDeleteBtn({ deck }) {
  
    const history = useHistory();
    
    const handleDeckDelete = async (deckId) => {
      const result = window.confirm("Are you sure you want to delete this post?");
      if (result) {
        await deleteDeck(deckId).then(history.go(0))
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={() => handleDeckDelete(deck.id)}>Delete</button>
  )
};

export default DeckDeleteBtn;