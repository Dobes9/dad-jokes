import React, { Component } from "react";
import { getColorAndEmoji } from "../utils/helpers";
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
          <span
            style={{ borderColor: getColorAndEmoji(votes).color }}
            className="Joke-votes"
          >
            {votes}
          </span>
          <i className="fas fa-arrow-down" onClick={this.handleDownVote}></i>
        </div>
        <div className="Joke-text">{joke}</div>
        <div className="Joke-emoji">
          <i className={getColorAndEmoji(votes).emoji}></i>
        </div>
      </div>
    );
  }
}

export default Joke;
