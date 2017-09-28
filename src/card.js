import React from "react"
import "./card.css";


class Card extends React.Component {

    handleClick = () => {
        this.props.onclick(this.props.id);
    }

    // Props become an object, so className="foo" becomes { className: "foo } on this.props,
    // and onClick becomes { onClick: () => {} }
    render() {
          return (
            <div className={this.getClassName()} onClick={this.handleClick} id={this.props.id}>
                <img src={this.props.isFlipped ? this.props.src : "/images/barefoot.png"} alt={this.props.alt}/>
            </div>
          )
    }

    getClassName = () => {
        if (this.props.isFlipped) {
             return "card up"
        }
        return "card down"
    }
    
}


export default Card