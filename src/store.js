import { createStore, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

const initialState = {
    address: {
      validAddress: null,
      checking: false,
      addressError: false
    },
    view: {
      mainContainer: 'map',
      tabIndex: 0,
      perPage: 10,
      pageIndex: 1
    }
}

const middleware = [ thunk ]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store