import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing.js";

let mountNode = document.getElementById("root");

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Landing} />

        {/* <Route path="/signin" component={Authentication} /> */}
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, mountNode);
export default Routes;
