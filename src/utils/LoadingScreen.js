import React, { Component } from "react";

class LoadingScreen extends Component {
  render() {
    return (
      <div className="LoadingScreen">
        <i className="far fa-8x fa-laugh fa-spin"></i>
        <h1 className="JokeList-title">Loading...</h1>
      </div>
    );
  }
}

export default LoadingScreen;
