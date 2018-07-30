import React, { Component } from "react";
import HeadWrapper from "./HeadWrapper.jsx";
import MessageWrapper from "./MessageWrapper.jsx";

class ItemWrapper extends Component {
  render() {
    return (
      <div className="itemWrapper">
        <HeadWrapper review={this.props.review} />
        <MessageWrapper review={this.props.review} toggle={this.props.toggle} />
      </div>
    );
  }
}

export default ItemWrapper;
