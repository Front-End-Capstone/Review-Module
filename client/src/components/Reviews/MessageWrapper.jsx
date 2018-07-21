import React, { Component } from "react";

class MessageWrapper extends Component {
  render() {
    return (
      <div className="messageWrapper">
        <span className="message">
          Amazing walk up Hollywood Hill with beautiful views upon the city. The
          guide Leopold seems to know pretty much everything about the city,
          it’s super entertaining listening to all the small (Website hidden by
          Airbnb) and stories he has to tell. Great start to any LA vacation!
          <button type="button">
            <span>+ More</span>
          </button>
        </span>
      </div>
    );
  }
}

export default MessageWrapper;
