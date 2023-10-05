import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function CardDeleteBtn({ card }) {
  
    const history = useHistory();
    
    const handleCardDelete = async (id) => {
      const result = window.confirm("Are you sure you want to delete this post?");
      if (result) {
        await deleteCard(id).then(history.go(0))
      }
    };

  return (
    <button className="btn btn-danger" onClick={() => handleCardDelete(card.id)}>Delete</button>
  )
  };

export default CardDeleteBtn;