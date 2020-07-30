import React from 'react'
import { useSelector } from 'react-redux'
import TweetEmbed from 'react-tweet-embed'

const TweetDisplay = () => {
  let tweetsToShow
  const selected = useSelector(s=>s.view.selectedAccount)
  const account = useSelector(s=>s.twitterAccounts.find(a=>a.id === selected))
  const perPage = useSelector(s=>s.view.perPage)
  const pageIndex = useSelector(s=>s.view.pageIndex)

  const startIndex = (pageIndex - 1) * perPage
  if (account) {
    tweetsToShow = account.tweets.slice(startIndex, startIndex + perPage).map(a=>a.tweet_id)
  }
  
  return (
    <>
      {account && 
        <>
          {tweetsToShow.map(t=><TweetEmbed id={t} />)}
        </>
      }

        
    </>
  )
}

export default TweetDisplay