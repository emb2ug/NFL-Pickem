import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes.js";
import AppBarLogin from "./Appbar-login.js";
import AppBarMain from "./Appbar-main";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <AppBarMain />
      </div>
    );
  }
}

export default Landing;
