import React from "react"
import Card from "./card"
import "./card.css";
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"

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
        const duplicatedPhotos = photos.concat(photos)
        const cards = duplicatedPhotos.map((imgUrl, i) => {
            if (i > photos.length-1) {
                i = i - photos.length
            }

            return (
                {
                    src: imgUrl,
                    alt: alts[i],
                    isFlipped: false,
                    id: uuidv4()
                }
            )
        })
        const shuffledCards = shuffle(cards)
        console.log(shuffledCards)

        return cards
    }

    handleCardClick = (cardId) => {
        alert(cardId)
    }


    render() {
        return (
        <div className="game">
            <h1>Ultra Memory Game</h1>
            {this.state.cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    src={card.src}
                    alt={card.alt}
                    onclick={this.handleCardClick}/>
            ))}
        </div>
        )
    }

}

export default Game