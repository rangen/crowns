import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import PropTypes from 'prop-types'

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

const App = () => (
  // static propTypes = {
  //   addressEntered: PropTypes.bool.isRequired,
  //   validAddress: PropTypes.bool,
  //   selectedPolitician: PropTypes.object
  // }
      <div className="ui grid container sixteen column">
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <div className='three wide column'>
            <Sidebar />
          </div>
          <div className='thirteen wide column'>
            <MainContainer />
          </div>
        </div>
      </div>
)

const mapStateToProps = state => {
  const { politicianSelected, enteredAddress  } = state

  return {
    politicianSelected,
    enteredAddress
  }
}


export default connect(mapStateToProps)(App);