import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./home/Header";
import NotFound from "./home/NotFound";
import Home from "./home/Home";
import CreateDeck from "./decks/CreateDeck";
import Deck from "./decks/Deck";
import EditDeck from "./decks/EditDeck";
import CreateCard from "./cards/CreateCard";
import EditCard from "./cards/EditCard";
import Study from "./study/Study";


function Layout() {

  return (
    <>
      <Header />
      <div className="container">

        {/* TODO: Implement the screen starting here */}
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>

          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route exact path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          
          <Route>
            <NotFound />
          </Route>
          
        </Switch>
      </div>
    </>
  );
}

export default Layout;
