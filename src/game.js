import React from "react"
import Card from "./card"
import "./card.css";
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"
import SuccessMessage from "./SuccessMessage"

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
          isMatched: false,
          id: uuidv4()
        }
      )
    })
    const shuffledCards = shuffle(cards)
    console.log(shuffledCards)
    
    return cards
  }
  
  
  resetGame = () => {
    const newCardsState = this.setupGame()
    this.setState({ cards: newCardsState })
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
      // TODO: Make it impossible to open another card
      this.checkIfCardsMatch(flippedCards)
    }
  }
  
  checkIfCardsMatch = (flippedCards) => {
    if (flippedCards[0].alt === flippedCards[1].alt) {
      console.log("Matched!")
      
      const matchedCardsState = this.state.cards.map((card) => {
        if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
          card.isMatched = true
          card.isFlipped = false
        }
        return card
      })
      
      this.setState({ cards: matchedCardsState})
      
    } else {
      // TODO: If click happens before the timeout has gone, the two cards should flip closed from the click
      setTimeout(this.flipAllCardsBack, 1000)
    }
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
        <button onClick={this.resetGame}> Reset Game </button>
        {
          this.state.cards.filter((card) => {
            return card.isMatched === false
          }).length === 0 && <SuccessMessage />
        }
        
        {this.state.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            src={card.src}
            alt={card.alt}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onclick={this.handleCardClick}/>
        ))}
      </div>
    )
  }
  
}

export default Game