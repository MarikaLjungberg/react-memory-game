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
    
    

  handleCardClick = (clickedCardId) => {
      const newCardsState = this.state.cards.map((card) => {
        if (card.id === clickedCardId) {
          card.isFlipped = true
        }
      return card
      })
    
      this.setState({ cards: newCardsState }, this.checkCards)
  }
  
  checkCards = () => {
      const flippedCards = this.state.cards.filter((card) => {
        return card.isFlipped === true
      })
      if (flippedCards.length > 1) {
        //Make it impossible to open another card
        this.checkIfCardsMatch(flippedCards)
      }
  }
  
  checkIfCardsMatch = (flippedCards) => {
      if (flippedCards[0].alt === flippedCards[1].alt) {
        console.log("Matched!")
        this.removeMatchedCards(flippedCards[0], flippedCards[1])
        // Why does it not always wait 1 sec?
      } else {
        // If click happens before the timeout has gone, the two cards should flip closed from the click
        setTimeout(this.flipAllCardsBack, 1000)
      }
  }
  
  removeMatchedCards = (card1, card2) => {
    const card1CssId = document.getElementById(card1.id)
    const card2CssId = document.getElementById(card2.id)
    setTimeout(this.hideImages(card1CssId, card2CssId), 1000)
    
    this.flipAllCardsBack()
  }
  
  hideImages = (card1CssId, card2CssId) => {
    card1CssId.style.visibility = "hidden"
    card2CssId.style.visibility = "hidden"
  }
  
  flipAllCardsBack = () => {
    const flipBackAllCardsState = this.state.cards.map((card) => {
      card.isFlipped = false
      return card
    })
    this.setState({ cards: flipBackAllCardsState })
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
                    isFlipped={card.isFlipped}
                    onclick={this.handleCardClick}/>
            ))}
        </div>
        )
    }

}

export default Game