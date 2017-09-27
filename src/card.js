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
        <div className="card" onClick={this.handleClick}>
            <img src={this.props.src} alt={this.props.alt}/>
        </div>
        )
    }
}


export default Card