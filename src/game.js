import React from "react"
import Card from "./card"
import "./card.css";

const Game = () => (
    <div className="game">
        <h1>Memory game</h1>
        <div className="cardBoard">
            <Card src="/images/dog1.jpg"/>
            <Card src="/images/dog1.jpg"/>
            <Card src="/images/dog3.jpg"/>
            <Card src="/images/dog1.jpg"/>
            <Card src="/images/dog1.jpg"/>
            <Card src="/images/dog3.jpg"/>
        </div>
    </div>
)

export default Game