import React from "react";
import { Link, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";


function BreadCrumb({ deck, card }) {
    const location = useLocation();
    const { deckId } = useParams();

    const navHome = <Link to="/" className="breadcrumb-active breadcrumb-divider">Home</Link>
   

    switch ( location.pathname ) {
        case `/decks/new`:
            return (
                <nav>
                    {navHome}
                    <Link to="/decks/new"
                        className="breadcrumb-active breadcrumb-divider">
                        Create Deck
                    </Link>
                </nav>
            )
        
        case `/decks/${deckId}`:
            return (
                <nav>
                    {navHome}
                    <Link to={`/decks/${deckId}`} 
                        className="breadcrumb-active breadcrumb-divider">
                        {deck.name}
                    </Link>
                </nav>
            )
        case `/decks/${deckId}/study`:
            return (
                <nav>
                    {navHome}
                    <Link to={`/decks/${deckId}`} 
                        className="breadcrumb-active breadcrumb-divider">
                        {deck.name}
                    </Link>
                    <Link to={`/decks/${deckId}/study`}
                        className="breadcrumb-active breadcrumb-divider">
                        Study
                    </Link>
                </nav>
            )
        case `/decks/${deckId}/edit`:
            return (
                <nav>
                    {navHome}
                    <Link to={`/decks/${deckId}`} 
                        className="breadcrumb-active breadcrumb-divider">
                        {deck.name}
                    </Link>
                    <Link to={`/decks/${deckId}/edit`}
                        className="breadcrumb-active breadcrumb-divider">
                        Edit Deck
                    </Link>
                </nav>
            )
        case `/decks/${deckId}/cards/new`:
            return (
                <nav>
                    {navHome}
                    <Link to={`/decks/${deckId}`} 
                        className="breadcrumb-active breadcrumb-divider">
                        {deck.name}
                    </Link>
                    <Link to={`/decks/${deckId}/cards/new`}
                        className="breadcrumb-active breadcrumb-divider">
                        Add Card
                    </Link> 
                </nav>
            )
        case `/decks/${deckId}/cards/${card.id}/edit`:
            return (
                <nav>
                    {navHome}
                    <Link to={`/decks/${deckId}`} 
                        className="breadcrumb-active breadcrumb-divider">
                        {deck.name}
                    </Link>
                    <Link to={`/decks/${deckId}/cards/${card.id}/edit`}
                        className="breadcrumb-active breadcrumb-divider">
                        Edit Card {card.id}
                    </Link>
                </nav>
            )
        default:
            return "missing crumbs"
    }
}

export default BreadCrumb;



// function BreadCrumb() {
//     const location = useLocation();
//     const { deckId } = useParams();
//     const [deck, setDeck] = useState([]);
//     console.log("location", location)
    
//      //Track deck id to add to card
//      useEffect(() => {
//         const abortController = new AbortController();
    
//         async function getDeck() {
//           try {
//             const getDeckById= await readDeck(deckId, abortController.signal)
    
//             setDeck(getDeckById);
//           } catch (error) {
//             if (error.name !== "AbortError") {
//               console.error(error);
//             }
//           }
//         }
//         getDeck();
    
//         return () => {
//           abortController.abort();
//         };
//       }, [deckId]);
    

//     let currentLink = "";
    
        
//         console.log("currentLink", currentLink)
//     const crumbs = location.pathname.split("/")
//         .filter(crumb => crumb !== "")
//         .map((crumb, ci) => {
//             crumb.replace(deckId, deck.name)
//             currentLink += `/${crumb}`;
//             console.log("crumb", crumb)
        
//         return (
//             <div className="crumb" key={ci}>
//                 <Link to={currentLink}>{crumb}</Link>
//             </div>
//         )
//     });
    
//     return (
//         <div className="breadcrumbs">
//             {crumbs}
//         </div>
//     )
// }








