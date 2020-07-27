import api from '../services/api'

export const SELECT_POLITICIAN = 'SELECT_POLITICIAN'
export const CHECK_ADDRESS = 'CHECK_ADDRESS'
export const PROCESS_DATA = 'PROCESS_DATA'
export const TRACK_ADDRESS = 'TRACK_ADDRESS'
export const FETCHING_ADDRESS = 'FETCHING_ADDRESS'


export const trackEntry = address => ({
  type: TRACK_ADDRESS,
  address
})

export const checkAddress = (address) => {
  return (dispatch) => {
    dispatch({type: FETCHING_ADDRESS })
    
    api.search(address)
      .then(response => response.json())
      .then(json => dispatch({type: PROCESS_DATA, json}))
  }
}