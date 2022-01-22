import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
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
        <h1>Dad Jokes</h1>
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
