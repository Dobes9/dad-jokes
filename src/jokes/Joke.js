import React, { Component } from "react";
import { getColor } from "../utils/helpers";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }
  handleUpVote() {
    const { handleVote, id } = this.props;
    handleVote(id, 1);
  }
  handleDownVote() {
    const { handleVote, id } = this.props;
    handleVote(id, -1);
  }
  render() {
    const { votes, joke } = this.props;
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.handleUpVote}></i>
          <span style={{ borderColor: getColor(votes) }} className="Joke-votes">
            {votes}
          </span>
          <i className="fas fa-arrow-down" onClick={this.handleDownVote}></i>
        </div>
        <div className="Joke-text">{joke}</div>
        <div className="Joke-emoji">
          <i
            className="em em-rolling_on_the_floor_laughing"
            aria-role="presentation"
            aria-label="ROLLING ON THE FLOOR LAUGHING"
          ></i>
        </div>
      </div>
    );
  }
}

export default Joke;
