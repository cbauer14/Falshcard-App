import React from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeckDeleteBtn";

function DeckHomeView({ deck }) {
    
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{deck.name}</h3>
                <p className="superscript">{deck.cards.length} cards</p>
                <p>{deck.description}</p>
                <Link to={`/decks/${deck.id}/study`}><button className="btn btn-primary" type="button">Study</button></Link>
                <Link to={`/decks/${deck.id}`}><button className="btn btn-secondary" type="button">View</button></Link>
                <DeleteBtn deck={deck} />
            </div>
        </div>
    )
}

export default DeckHomeView;