import React, { Component } from "react";
import Tweet from "./Tweet";

var testTweet = {
  message: "Going offline for a few days",
  gravatar: "emusk",
  author: {
    handle: "elonmusk",
    name: "Elon Musk"
  },
  likes: 144,
  retweets: 74,
  timestamp: "2019-11-19 16:51:37"
};

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="jumbotron jumbotron-fluid text-white bg-dark">
          <div class="container">
            <h1 class="display-2">React Workouts</h1>
            <p class="lead">
              inspired by pure react.
            </p>
          </div>
        </div>
        <Tweet tweet={testTweet} />
      </div>
    );
  }
}
