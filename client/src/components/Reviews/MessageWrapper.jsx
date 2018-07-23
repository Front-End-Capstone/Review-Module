import React, { Component } from "react";

class MessageWrapper extends Component {
  render() {
    return (
      <div className="messageWrapper">
        <span className="message">
          {this.props.review.review}
          <button type="button">
            <span>+ More</span>
          </button>
        </span>
      </div>
    );
  }
}

export default MessageWrapper;
