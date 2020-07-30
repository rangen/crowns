import { combineReducers } from 'redux'

import {
  PROCESS_DATA, TRACK_ADDRESS, FETCHING_ADDRESS, SELECT_POLITICIAN, SELECT_ACCOUNT, MAP_RETURN, CHANGE_TAB, PER_PAGE, CHANGE_PAGE
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
      const { cookIndex, districtGeoJson } = action.json
      if (!districtGeoJson) { return {validAddress: false}}    //refactor but works, would prefer to check response.status in fetch

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

      return [
        ...senatorAccounts.concat(repAccounts)
      ]
    default:
      return state
  }
}

const selectedReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return {
        ...state
      }
    case SELECT_POLITICIAN:
      return {
        ...action.selected
      }
    default:
      return state
  }
}

const viewReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_POLITICIAN:
      return {
        ...state,
        mainContainer: 'politician',
        selectedAccount: 'select',
        pageIndex: 1
      }
    case MAP_RETURN:
      return {
        ...state,
        mainContainer: 'map'
      }
    case CHANGE_TAB:
      return {
        ...state,
        tabIndex: action.val
      }
    case SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.val,
        totalTweets: action.total,
        totalPages: Math.ceil(action.total / state.perPage)
      }
    case PER_PAGE:
      const total = Math.ceil(state.totalTweets / action.val)
      return {
        ...state,
        perPage: action.val,
        totalPages: total,
        pageIndex: Math.min(state.pageIndex, total)
      }
    case CHANGE_PAGE:
      return {
        ...state,
        pageIndex: action.val
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  address: addressReducer,
  politicians: politicianReducer,
  twitterAccounts: twitterReducer,
  selected: selectedReducer,
  view: viewReducer
})

export default rootReducer
