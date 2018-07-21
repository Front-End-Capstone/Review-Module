import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewWrapper from "./components/ReviewWrapper.jsx";
import SideBar from "./components/SideBar.jsx";

class App extends Component {
  render() {
    return (
      <div className="daddyWrapper">
        <ReviewWrapper />
        <SideBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
