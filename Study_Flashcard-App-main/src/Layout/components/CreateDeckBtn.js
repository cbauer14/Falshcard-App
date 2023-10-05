import React from "react";
import {Link} from "react-router-dom";

function CreateDeckBtn() {
    return <Link to="/decks/new"><button className="btn btn-secondary" type="button">+ Create Deck</button></Link>
}

export default CreateDeckBtn;