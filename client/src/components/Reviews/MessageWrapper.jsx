import React, { Component } from "react";

class MessageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      currentReview: ""
    };
    this.toggleMore = this.toggleMore.bind(this);
  }

  componentDidMount() {
    //Checks the length of the reivew, if its too long it'll have a show "more" button
    if (this.props.review.review.length < 150) {
      this.setState({ show: !this.state.show });
    } else {
      this.setState({
        currentReview: `${this.props.review.review.slice(0, 150)}...`
      });
    }
  }

  //This function will toggle the display of longer reviews
  toggleMore() {
    this.setState({
      show: !this.state.show,
      currentReview: this.props.review.review
    });
  }

  render() {
    const show = {
      display: this.state.show ? "block" : "none"
    };

    return (
      <div className="messageWrapper">
        <span className="message">
          {this.state.currentReview || this.props.review.review}
          <button type="button">
            <span
              style={show}
              className="more"
              onClick={() => this.toggleMore()}
            >
              + More
            </span>
          </button>
        </span>
      </div>
    );
  }
}

export default MessageWrapper;
