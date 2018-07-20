import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

let x;

let y;

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Reviews</h1>
          <img src="https://a0.muscache.com/im/pictures/f3a73646-bdc7-47b4-a47e-762febff3681.jpg?aki_policy=profile_small" />

          <h4>Jannik</h4>
          <h4>July 18, 2018</h4>
          <h3>
            Amazing walk up Hollywood Hill with beautiful views upon the city.
            The guide Leopold seems to know pretty much everything about the
            city, it’s super entertaining listening to all the small (Website
            hidden by Airbnb) and stories he has to tell. Great start to any LA
            vacation!
          </h3>
        </div>
        <div />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
