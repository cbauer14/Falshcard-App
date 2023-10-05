import React from "react"
import { useHistory } from "react-router-dom";

function AddCardBtn({ deck }) {
    const history = useHistory();
    const navHandler = () => {
        history.push(`/decks/${deck.id}/cards/new`)
    }
    
    return <button className="btn btn-primary" type="button" onClick={navHandler}>+ Cards</button>
}

export default AddCardBtn;