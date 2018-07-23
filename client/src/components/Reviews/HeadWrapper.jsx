import React, { Component } from "react";
import moment from "moment";

class HeadWrapper extends Component {
  render() {
    return (
      <div className="HeadWrapper">
        <a href="#">
          <img src={this.props.review.img} />
        </a>
        <h4>{this.props.review.firstName}</h4>
        <h4>{moment(this.props.review.date).format("MMMM D, YYYY")}</h4>
      </div>
    );
  }
}

export default HeadWrapper;
