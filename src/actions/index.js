import api from '../services/api'

export const SELECT_POLITICIAN = 'SELECT_POLITICIAN'
export const CHECK_ADDRESS = 'CHECK_ADDRESS'
export const PROCESS_DATA = 'PROCESS_DATA'
export const TRACK_ADDRESS = 'TRACK_ADDRESS'
export const FETCHING_ADDRESS = 'FETCHING_ADDRESS'
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT'
export const MAP_RETURN = 'MAP_RETURN'
export const CHANGE_TAB = 'CHANGE_TAB'
export const PER_PAGE = 'PER_PAGE'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const RESET_ADDRESS = 'RESET_ADDRESS'

export const trackEntry = address => ({
  type: TRACK_ADDRESS,
  address
})

export const resetEntry = () => ({
  type: RESET_ADDRESS
})

export const polSelected = (target) => {
  return (dispatch, getState) => {
    dispatch({type: CHANGE_TAB, val: 0})    
    dispatch({
      type: SELECT_POLITICIAN,
      selected: getState().politicians[target.branch].find(p=>p.id === target.id)
      })
  }
}

export const returnToMap = () => ({
  type: MAP_RETURN
})

export const changeTab = (val) => ({
  type: CHANGE_TAB,
  val
})

export const checkAddress = (address) => {
  return (dispatch) => {
    dispatch({type: MAP_RETURN })
    dispatch({type: FETCHING_ADDRESS })
    
    api.search(address)
      .then(response => response.json())
      .then(json => dispatch({type: PROCESS_DATA, json}))
  }
}