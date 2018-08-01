import React, { Component } from "react";
import ReviewHead from "./ModalReviewComponents/ReviewHead.jsx";
import ReviewBody from "./ModalReviewComponents/ReviewBody.jsx";

class ModalBody extends Component {
  render() {
    return (
      <section>
        <div className="allReviewsWrapper">
          <div className="xWrapper">X</div>
          <header>
            <h1>Reviews</h1>
          </header>

          {this.props.data.map(review => (
            <div className="itemWrapper">
              <ReviewHead review={review} />
              <ReviewBody review={review} toggle={this.props.toggle} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ModalBody;
