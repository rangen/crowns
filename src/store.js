import { createStore, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

const initialState = {
    address: {
      validAddress: false,
    }
    // },
    // selectedPol: {
    //   politicianSelected: false,
    //   isSenator: null,
    //   politicianID: null,
    //   twitterAccountID: null
    // },
    // pols: {
    //   senators: [],
    //   reps: []
    // },
    // twitterAccounts: []
}

const middleware = [ thunk ]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store