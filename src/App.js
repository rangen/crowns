import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import PropTypes from 'prop-types'

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'
import api from './services/api'
        
  const newAddress = (e) => {
    e.preventDefault()
    const address = document.getElementById('addressField').value
    
    api.search(address)
      .then(resp=>this.checkAddress(resp))    
  }
        
  const checkAddress = (resp) => {
    if (resp.status === 400) {
      // bad address, retry and alert
      
    } else if (resp.status === 200) {
      resp.json()
        .then(json=>this.setAddress(json))
    }
  }
  
  const setAddress = (data) => {
    //valid address   update store!
  }

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