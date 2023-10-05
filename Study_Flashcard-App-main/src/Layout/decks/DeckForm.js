import React from "react";
import { Link } from "react-router-dom";

function DeckForm({ handleSubmit, handleFormChange, formData }) {
    
    return (
        <div className="deck-form">
                <form name="new deck" onSubmit={handleSubmit}> 
                    <div className="form-section">
                        <label htmlFor="name" className="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Deck Name"
                            required={true}
                            onChange={handleFormChange}
                            value={formData.name}
                        />
                    </div>
                    <div className="form-section">
                        <label htmlFor="description" className="description">Description</label>
                        <textarea 
                            id="description"
                            type="text"
                            name="description"
                            placeholder="Brief deck description"
                            required={true}
                            rows={3}
                            onChange={handleFormChange}
                            value={formData.description}
                        />
                    </div>
                <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>Save</button>
                <Link to="/"><button className="btn btn-secondary">Cancel</button></Link>
                </form>
            </div>
    )
}

export default DeckForm;