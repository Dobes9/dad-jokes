import React, { Component } from "react";

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
          <span>{votes}</span>
          <i className="fas fa-arrow-down" onClick={this.handleDownVote}></i>
        </div>
        <div className="Joke-text">{joke}</div>
      </div>
    );
  }
}

export default Joke;
