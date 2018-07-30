import React, { Component } from "react";
import Modal from "./Reviews/Modal.jsx";
import axios from "axios";

class AllReviews extends Component {
  render() {
    return (
      <div>
        <button className="bigButton" onClick={() => this.props.modal()}>
          <div className="readReviewsWrapper">
            <span className="readReviewLeft">
              <span>Read all 100 reviews</span>
            </span>
            <span className="readReviewRight">Add Stars</span>
          </div>
        </button>
        <Modal modal={this.props.modal} show={this.props.show} />
      </div>
    );
  }
}

export default AllReviews;
