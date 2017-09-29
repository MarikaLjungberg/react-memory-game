import React from "react"
import "./successmessage.css"

class SuccessMessage extends React.Component {

  render() {
    return (
    <div className="successmessage">
        Flippin awesome!
      <br/>
      <br/>
      <div className="clicksMessage">
        You won the game in {this.props.count} clicks!
      </div>
    </div>
    )
  }

}

export default SuccessMessage