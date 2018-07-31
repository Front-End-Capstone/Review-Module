import React, { Component } from "react";
import ReviewHead from "./ModalReviewComponents/ReviewHead.jsx";
import ReviewBody from "./ModalReviewComponents/ReviewBody.jsx";

class ModalBody extends Component {
  render() {
    return (
      <div className="itemWrapper">
        <ReviewHead review={this.props.review} />
        <ReviewBody review={this.props.review} toggle={this.props.toggle} />
      </div>
    );
  }
}

export default ModalBody;
