import React, { Component } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default class TwitterContainer extends Component {

  state = {
    id: '1270326604603031552'
  }

  componentWillMount() {
    // setInterval(this.toggleTweetID, 5000)
  }

  toggleTweetID = () => {
    this.setState({
      id: (this.state.id === '1151945343690579970' ? '1270326604603031552' : '1151945343690579970') 
    })
  }

  render() {
    return (
        <>
            <TwitterTweetEmbed key={this.state.id} tweetId={this.state.id} />
            <TwitterTweetEmbed key={this.state.id} tweetId={this.state.id} />
        </>
    )
  }
}