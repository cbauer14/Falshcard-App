import { readCard } from "../../utils/api";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import CardDeleteBtn from "../components/CardDeleteBtn";

function Card({ card }) {
    const { url } = useRouteMatch();

    return (
        <div className="card">
            <div className="card-body container">
                <div className="row">
                    <div className="col">
                        <p>{`${card.front}`}</p>
                    </div>
                    <div className="col">
                        <p>{`${card.back}`}</p>
                        <CardDeleteBtn card={card} />
                        <Link to={`${url}/cards/${card.id}/edit`}><button className="btn btn-secondary" type="button">Edit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;