import { combineReducers } from 'redux'
import {
  PROCESS_DATA, TRACK_ADDRESS, FETCHING_ADDRESS
} from '../actions'

const createPol = (pol) => {
  return {
    ...pol.attributes,
    twitterAccounts: (pol.attributes.hasTweets ? pol.relationships.twitterAccounts.data.map(acct=>acct.id): [])
  }
}

const createAcct = (acct) => {
  return {
    id: acct.id,
    ...acct.attributes
  }
}

const addressReducer = (state = {}, action) => {
  switch (action.type) {
    case PROCESS_DATA:
      const { cookIndex, districtGeoJson, reps, senators } = action.json
      const { normalized_address, when_is_primary, district } = action.json.addressInfo
      
      return {
        ...state,
        checking: false,
        validAddress: true,
        normy: normalized_address,
        primaryMsg: when_is_primary,
        district: district,
        cookIndex: cookIndex.value,
        polygon: districtGeoJson,
        stateName: action.json.addressInfo.state
      }
    case TRACK_ADDRESS:
      return {
        ...state,
        entered: action.address
      }
    case FETCHING_ADDRESS:
      return {
        ...state,
        checking: true,
        validAddress: false
      }
    default:
      return state
  }
}
const politicianReducer = (state = {}, action) => {
  switch (action.type) {
    case PROCESS_DATA:
      return {
        reps: (!!action.json.reps && action.json.reps.data.map(r=>createPol(r))) || [],
        senators: (!!action.json.senators && action.json.senators.data.map(s=>createPol(s))) || []
      }
    default:
      return state
  }
}

const twitterReducer = (state = {}, action) => {
  switch (action.type) {
    case PROCESS_DATA:
      const senatorAccounts = !!action.json.senators ? action.json.senators.included.map(s=>createAcct(s)) : []
      const repAccounts = !!action.json.reps ? action.json.reps.included.map(r=>createAcct(r)) : []

      return {
        ...senatorAccounts.concat(repAccounts)
      }
    default:
      return state
  }
}




const rootReducer = combineReducers({
  address: addressReducer,
  politicians: politicianReducer,
  twitterAccounts: twitterReducer
})

export default rootReducer
