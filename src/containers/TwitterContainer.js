import React from 'react'
import { connect } from 'react-redux'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const TwitterContainer = ({ }) => (
  <>
  {/* {tweets.map((tweet, i) =>
    <TwitterTweetEmbed key={i} tweetId={tweet.id} />
  )} */}
  </>
)

const mapStateToProps = state => {
  const selectedPol = state.selected
  const accounts = state.twitterAccounts

  return {
    selectedPol,
    accounts
  }
}

export default connect(mapStateToProps)(TwitterContainer)