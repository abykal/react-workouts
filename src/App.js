import React, { Component } from 'react'
import Tweet from './Tweet'

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
            <div>
                <Tweet tweet={testTweet}/>
            </div>
        )
    }
}
