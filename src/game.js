import React from "react"
import Card from "./card"
import "./card.css";
import Counter from "./counter"

const Game = () => (
    <div className="game">
        <h1>Memory game</h1>
        <Counter/>
        <div className="cardBoard">
            <Card src="/images/appalachian.jpg"/>
            <Card src="/images/appalachian.jpg"/>
            <Card src="/images/badwater.png"/>
            <Card src="/images/badwater.png"/>
            <Card src="/images/fjallravenclassic.jpg"/>
            <Card src="/images/fjallravenclassic.jpg"/>
            <Card src="/images/leadville.jpg"/>
            <Card src="/images/leadville.jpg"/>
            <Card src="/images/teararoa.jpg"/>
            <Card src="/images/teararoa.jpg"/>
        </div>
    </div>
)

export default Game