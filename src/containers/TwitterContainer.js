import React from 'react'
import { useSelector } from 'react-redux'
import { Select, MenuItem } from '@material-ui/core'

const TwitterContainer = () => {
  const accounts = useSelector(s=>s.selected.twitterAccounts)
  return (
    <>
      <Select value={accounts[0]}>
        {accounts.map(a=><MenuItem value={a}>{a}</MenuItem>)}
      </Select>
    </>
  )
}

export default TwitterContainer