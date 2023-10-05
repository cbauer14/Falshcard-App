import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";
import BreadCrumb from "../components/Breadcrumb";



function CreateDeck() {
    //set initial form state
    const initialFormState = {
        name: "",
        description: ""
    }
    //set formData state
    const [formData, setFormData] = useState({ ...initialFormState });

    const history = useHistory();
    
    //handle changes to form input
    const handleFormChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    }

    //handle when Submit gets clicked
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDeck = await createDeck(formData)
        console.log("new deck", newDeck)
        history.push(`/decks/${newDeck.id}`)
    };

    return (
        
        <div>
            <BreadCrumb />
            <h1>Create New Deck</h1>
            <DeckForm 
                formData={formData} 
                handleSubmit={handleSubmit} 
                handleFormChange={handleFormChange}
            />
        </div>
          
    )
}

export default CreateDeck;