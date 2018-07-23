import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewWrapper from "./components/ReviewWrapper.jsx";
import SideBar from "./components/SideBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    axios.get("/api/data").then(response => {
      this.setState({ data: response.data });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div className="daddyWrapper">
        <ReviewWrapper data={this.state.data} />
        <SideBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
