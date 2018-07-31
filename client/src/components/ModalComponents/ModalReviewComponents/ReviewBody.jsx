import React, { Component } from "react";

class ReviewBody extends Component {
  render() {
    return (
      <div className="messageWrapper">
        <span className="message">{this.props.review.review}</span>
      </div>
    );
  }
}

export default ReviewBody;
