import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import "./JokeList.css";
import { loadJokes } from "../utils/apiCalls";

class JokeList extends Component {
  static defaultProps = {
    numJokesToFetch: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }
  async componentDidMount() {
    // load jokes
    this.setState({ jokes: await loadJokes(this.props.numJokesToFetch) });
  }
  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"></img>
          <button className="JokeList-getmore">New Jokes</button>
        </div>

        <div className="JokeList-jokes">
          <ul>
            {this.state.jokes.map((joke) => {
              return <li className="Joke">{joke}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default JokeList;
