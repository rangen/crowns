import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, Tab } from '@material-ui/core'
import { changeTab } from '../actions'

const PoliticianContainer = () => {
  const pol = useSelector(s=>s.selected)
  const tabIndex = useSelector(s=>s.view.tabIndex)
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    dispatch(changeTab(newValue))
  }

  return (
    <>
      <Tabs value={tabIndex} onChange={handleChange}>
        <Tab label={pol.candidateName} index={0} />
        <Tab label='Twitter Accounts' disabled={pol.hasTweets ? false : true} index={1} />
        <Tab label='Tab 1' index={0} />
      </Tabs>      
    </>
  )
}


export default PoliticianContainer