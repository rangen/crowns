import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select, MenuItem, InputLabel, makeStyles, FormControl, ListItemIcon } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import TweetDisplay from './TweetDisplay'
import { SELECT_ACCOUNT, PER_PAGE, CHANGE_PAGE } from '../actions'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const TwitterContainer = () => {
  const classes = useStyles()
  const myAccountIDs = useSelector(s=>s.selected.twitterAccounts)
  const myAccounts = useSelector(s=>s.twitterAccounts.filter(a=>myAccountIDs.includes(a.id)))
  const selectedAccount = useSelector(s=>s.view.selectedAccount)
  const perPage = useSelector(s=>s.view.perPage)
  const pageIndex = useSelector(s=>s.view.pageIndex)
  const totalPages = useSelector(s=>s.view.totalPages)
  const dispatch = useDispatch()

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel>Twitter Account(s)</InputLabel>
        <Select 
          value={selectedAccount || 'select'}
          autowidth
          onChange={e=>dispatch({type: SELECT_ACCOUNT, val: e.target.value, total: myAccounts.find(a=>a.id === e.target.value).tweetCount})}
          >
            {selectedAccount === 'select' &&
              <MenuItem value='select'>
                <ListItemIcon>
                  <Twitter />
                </ListItemIcon>
              Select Account</MenuItem>}
            {myAccounts.map(a=><MenuItem value={a.id}>
              <ListItemIcon>
                <Twitter style={{fill: '#1da1f2'}}/>
              </ListItemIcon>{`${a.handle} (${a.use})`}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Jump to Page</InputLabel>
        <Select 
          value={pageIndex || '1'}
          autowidth
          onChange={e=>dispatch({type: CHANGE_PAGE, val: +e.target.value})}
          >
            {Array.from(Array(totalPages), (_,x) => x+1).map(i=>
              <MenuItem value={i}>
                <ListItemIcon>
                  <MenuBookOutlinedIcon />
                </ListItemIcon>
              {i}
              </MenuItem>
            )}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Tweets Per Page</InputLabel>
        <Select 
          value={perPage || '5'}
          autowidth
          onChange={e=>dispatch({type: PER_PAGE, val: +e.target.value})}
          >
            <MenuItem value='5'>
              <ListItemIcon>
                <FormatListNumberedOutlinedIcon />
              </ListItemIcon>
            5
            </MenuItem>
            <MenuItem value='10'>
              <ListItemIcon>
                <FormatListNumberedOutlinedIcon />
              </ListItemIcon>
            10
            </MenuItem>
            <MenuItem value='25'>
              <ListItemIcon>
                <FormatListNumberedOutlinedIcon />
              </ListItemIcon>
            25
            </MenuItem>
        </Select>
      </FormControl>
      <TweetDisplay />
    </>
  )
}

export default TwitterContainer