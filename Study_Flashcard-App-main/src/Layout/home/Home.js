import React from "react";
import CreateDeckBtn from "../components/CreateDeckBtn";
import DeckList from "../decks/DeckList";


function Home() {
  
  
    return (
        <div>
            <CreateDeckBtn />
            <DeckList />
        </div>
    )
}

export default Home;