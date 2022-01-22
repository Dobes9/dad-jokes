import React, { Component } from "react";
import Joke from "./Joke";
import "./JokeList.css";
import { loadJokes } from "../utils/apiCalls";

class JokeList extends Component {
  static defaultProps = {
    numJokesToFetch: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes")) || [],
    };
    this.handleVote = this.handleVote.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }
  async getJokes() {
    const jokes = await loadJokes(this.props.numJokesToFetch);
    this.setState({ jokes });
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
  }
  handleVote(id, delta) {
    this.setState((st) => {
      return {
        jokes: st.jokes.map((joke) => {
          return joke.id === id ? { ...joke, votes: joke.votes + delta } : joke;
        }),
      };
    });
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
            {this.state.jokes.map((j) => {
              const { id, joke, votes } = j;
              return (
                <Joke
                  handleVote={this.handleVote}
                  id={id}
                  key={id}
                  joke={joke}
                  votes={votes}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default JokeList;
