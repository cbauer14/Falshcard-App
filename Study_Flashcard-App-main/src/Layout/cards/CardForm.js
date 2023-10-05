import React from "react";
import { Link } from "react-router-dom";

function CardForm({ handleFormChange, handleSubmit, formData, deck}) {
    console.log("form deck", deck)
    return (
        <div className="form-section">
            <form name="new card" onSubmit={handleSubmit}>
                <div className="form-section">
                    <label htmlFor="front" className="card-front">Front</label>
                    <textarea
                        id="front"
                        type="text"
                        name="front"
                        placeholder="Front side of card"
                        required={true}
                        rows={3}
                        onChange={handleFormChange}
                        value={formData.front}
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="back" className="card-back">Back</label>
                    <textarea 
                        id="back"
                        type="text"
                        name="back"
                        placeholder="Back side of card"
                        required={true}
                        rows={3}
                        onChange={handleFormChange}
                        value={formData.back}
                    />
                </div>
                <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>Save</button>
                <Link to={`/decks/${deck.id}`}><button className="btn btn-secondary">Done</button></Link>
                </form>
        </div>
    )
};

export default CardForm;