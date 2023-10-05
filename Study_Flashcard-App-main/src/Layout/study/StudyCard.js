import React from "react";

function StudyCard({ card, deckLength, cardNumber, isFlipped, handleFlip, handleNextCard }) {
    
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Card {cardNumber} of {deckLength}</h3>
                    <div onClick={handleFlip}>
                        {isFlipped ? card.front : card.back}
                    </div>
                    <div>
                    <button className="btn btn-secondary" type="button" onClick={handleFlip}>Flip</button>
                    {!isFlipped && <button className="btn btn-primary" type="button" onClick={handleNextCard}>Next</button>}
                    </div>
                </div>  
            </div>
        </>
    );
}

export default StudyCard