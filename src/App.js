import React, { Component } from "react";
import Tweet from "./Tweet";
import Envelope from './Envelope'

var data = {
  tweet: {
    message: "Going offline for a few days",
    gravatar: "emusk",
    author: {
      handle: "elonmusk",
      name: "Elon Musk"
    },
    likes: 144,
    retweets: 74,
    timestamp: "2019-11-19 16:51:37"
  },
  envelope: {
    sender: {
        name: "Steve Rogers",
        address: "Always Flying",
        city: "Wakanada",
        stamp: "https://img.cinemablend.com/filter:centercrop/quill/1/2/3/8/3/b/12383b63cd92f2b53fa7636c2e91a0a768aa4389.jpg?w=170&h=170"
    },
    receiver: {
        name: "Tony Stank",
        address: "177a Bleecker St",
        city: "Boston",
        stamp:"https://res.cloudinary.com/teepublic/image/private/s--kDZKY-ys--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1460567293/production/designs/477129_1.jpg"
    },
  }
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
        <Tweet tweet={data.tweet} />
        <Envelope mail={data.envelope} />
      </div>
    );
  }
}
