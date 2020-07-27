import React from 'react'
import PropTypes from 'prop-types'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const TwitterContainer = ({tweets}) => (
  <>
  {tweets.map((tweet, i) =>
    <TwitterTweetEmbed key={i} tweetId={tweet.id} />
  )}
  </>
)

TwitterContainer.propTypes = {
  tweets: PropTypes.array.isRequired
}

export default TwitterContainer

    // state = {
    //   id: '1270326604603031552'
    // }