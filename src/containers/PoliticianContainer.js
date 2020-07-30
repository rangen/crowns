import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, Tab } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import { changeTab } from '../actions'
import TwitterContainer from './TwitterContainer'
import InfoContainer from './InfoContainer'

const PoliticianContainer = () => {
  const pol = useSelector(s=>s.selected)
  const tabIndex = useSelector(s=>s.view.tabIndex)
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    dispatch(changeTab(newValue))
  }

  return (
    <>
      <Tabs 
        value={tabIndex} 
        onChange={handleChange}
        centered>
        <Tab label={pol.candidateName} index={0} />
        {/* <Tab label='Twitter Accounts' disabled={pol.hasTweets ? false : true} index={1} /> */}
        <Tab icon={<Twitter />} disabled={pol.hasTweets ? false : true} index={1} />
        <Tab label='Spread The Word (coming soon)' index={2} />
      </Tabs>
      {tabIndex===0 &&
        <InfoContainer />}
      {tabIndex===1 &&
        <TwitterContainer />}
      {tabIndex===2 &&
        <h1>Share Your Candidate Info on Facebook, Instagram, Twitter or via Email</h1>}

    </>
  )
}


export default PoliticianContainer