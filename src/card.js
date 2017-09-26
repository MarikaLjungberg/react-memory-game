import React from "react"
import "./card.css";

const Card = (props) => (
    <div className="card">
        <img src={props.src} alt="A card in the memory game" />
    </div>
)

export default Card