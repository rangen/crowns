import React from 'react'
import { useSelector } from 'react-redux'
import TweetEmbed from 'react-tweet-embed'

const TweetDisplay = () => {
  const selected = useSelector(s=>s.view.selectedAccount)
  const account = useSelector(s=>s.twitterAccounts.find(a=>a.id === selected))
  debugger
  return (
    <>
      {account && 
        <>
        <TweetEmbed id={account.tweets[0].tweet_id} />
        </>
      }

        
    </>
  )
}

export default TweetDisplay