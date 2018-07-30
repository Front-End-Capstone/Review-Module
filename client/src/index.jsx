import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import ReviewWrapper from "./components/ReviewWrapper.jsx";
import SideBar from "./components/SideBar.jsx";
import AllReviews from "./components/AllReviews.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false
    };
    this.handleLoad = this.handleLoad.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    axios.get("/api/data").then(response => {
      this.setState({ data: response.data });
    });
  }
  //This function will toggle the display of longer reviews
  handleModal() {
    console.log("Hello");
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="daddyWrapper">
        <div className="leftSideWrapper">
          <ReviewWrapper data={this.state.data} toggle={this.toggleMore} />
          <AllReviews modal={this.handleModal} show={this.state.show} />
        </div>
        <SideBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
