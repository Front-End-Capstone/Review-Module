import React, { Component } from "react";
import ItemWrapper from "./Reviews/ItemWrapper.jsx";

class ReviewWrapper extends Component {
  render() {
    return (
      <div className="reviewWrapper">
        <div className="titleWrapper">
          <h1 className="review">Reviews</h1>
        </div>

        {this.props.data.map(review => {
          return <ItemWrapper review={review} toggle={this.props.toggle} />;
        })}
      </div>
    );
  }
}

export default ReviewWrapper;
