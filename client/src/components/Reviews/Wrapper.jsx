import React, { Component } from "react";
import HeadWrapper from "./HeadWrapper.jsx";
import MessageWrapper from "./MessageWrapper.jsx";

class Wrapper extends Component {
  render() {
    return (
      <div className="itemWrapper">
        <HeadWrapper />
        <MessageWrapper />
      </div>
    );
  }
}

export default Wrapper;
