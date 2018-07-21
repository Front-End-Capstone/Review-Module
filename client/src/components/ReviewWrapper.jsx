import React, { Component } from "react";
import ItemWrapper from "./Reviews/Wrapper.jsx";

class ReviewWrapper extends Component {
  render() {
    return (
      <div className="reviewWrapper">
        <div className="titleWrapper">
          <h1 className="review">Reviews</h1>
        </div>
        <ItemWrapper />
      </div>
    );
  }
}

export default ReviewWrapper;
