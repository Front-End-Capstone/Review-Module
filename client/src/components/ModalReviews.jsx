import React, { Component } from "react";
import Modal from "./ModalComponents/Modal.jsx";
import axios from "axios";

class ModalReviews extends Component {
  render() {
    return (
      <div>
        <button className="bigButton" onClick={() => this.props.modal()}>
          <div className="readReviewsWrapper">
            <span className="readReviewLeft">
              <span>Read all 100 reviews</span>
            </span>
            <span className="readReviewRight">
              <span className="star">
                <p className="Star"> &#x2605;</p>
              </span>
              <span className="star">
                <p className="Star"> &#x2605;</p>
              </span>
              <span className="star">
                <p className="Star"> &#x2605;</p>
              </span>
              <span className="star">
                <p className="Star"> &#x2605;</p>
              </span>
              <span className="star">
                <p className="Star"> &#x2605;</p>
              </span>
            </span>
          </div>
        </button>
        <Modal
          modal={this.props.modal}
          show={this.props.show}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default ModalReviews;
