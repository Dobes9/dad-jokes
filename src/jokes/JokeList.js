import React, { Component } from "react";
import Joke from "./Joke";
import "./JokeList.css";
import { loadJokes } from "../utils/apiCalls";
import LoadingScreen from "../utils/LoadingScreen";

class JokeList extends Component {
  static defaultProps = {
    numJokesToFetch: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes")) || [],
      isLoading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((j) => j.joke));
    this.handleVote = this.handleVote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    this.setState({ isLoading: true });
    try {
      const jokes = await loadJokes(this.props.numJokesToFetch, this.seenJokes);
      this.setState(
        (st) => {
          return { jokes: [...st.jokes, ...jokes], isLoading: false };
        },
        () =>
          window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (err) {
      alert(err);
      this.setState({ isLoading: false });
    }
  }

  handleClick() {
    this.getJokes();
  }

  handleVote(id, delta) {
    this.setState(
      (st) => {
        return {
          jokes: st.jokes.map((joke) => {
            return joke.id === id
              ? { ...joke, votes: joke.votes + delta }
              : joke;
          }),
        };
      },
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  sortedJokes() {
    return this.state.jokes.sort((a, b) => b.votes - a.votes);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="JokeList-LoadingScreen">
          <LoadingScreen />
        </div>
      );
    }
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="joy emoji"
          ></img>
          <button onClick={this.handleClick} className="JokeList-getmore">
            Fetch Jokes
          </button>
        </div>

        <div className="JokeList-jokes">
          <ul>
            {this.sortedJokes().map((j) => {
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
