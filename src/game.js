import React from "react"
import Card from "./card"
import "./card.css";

const photos = [
        "/images/appalachian.jpg",
        "/images/badwater.png",
        "/images/fjallravenclassic.jpg",
        "/images/leadville.jpg",
        "/images/teararoa.jpg",
        "/images/utmb.jpg"
    ]

const alts = [
        "The Appalachian trail",
        "The Badwater Marathon trail",
        "The Fjällräven Classic trail",
        "The Leadville Ultra Marathon trail",
        "The Te Araroa trail",
        "The Ultra-trail of Mont Blanc"
    ]

class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cards: this.setupGame()
        }
    }

    setupGame = () => {
        const cards = photos.map((imgUrl) => (
            {
                src: imgUrl,
                isFlipped: false
            }
        ))
        const duplicatedCards = cards.concat(cards)
        console.log(duplicatedCards)

        return duplicatedCards
    }
    
    shuffle = (cards) => {
        const shuffledCards = []
        
    }


    renderCard = (card) => (
        <Card src={card.src} alt={card.alt}/>
    )

    render() {
        return (
        <div className="game">
            <h1>Ultra Memory Game</h1>
            {this.state.cards.map(this.renderCard)}
        </div>
        )
    }

}

export default Game