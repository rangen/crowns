import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'
import api from './services/api'

class App extends React.PureComponent {
  state = {
    polygon: null,
    politicians: {
      senators: null,
      reps: null
    },
    cookIndex: {
      value: null
    },
    validAddress: false
  }

  newAddress = (e) => {
    e.preventDefault()
    const address = document.getElementById('addressField').value
    
    api.search(address)
      .then(resp=>this.checkAddress(resp))    
  }

  checkAddress = (resp) => {
    if (resp.status === 400) {
      // bad address, retry and alert
      this.setState({
        validAddress: false,
        polygon: null
      })
    } else if (resp.status === 200) {
      resp.json()
        .then(json=>this.setAddress(json))
    }
  }

  setAddress = (data) => {
    this.setState({
      validAddress: true,
      polygon: data.districtGeoJson || null,
      addressInfo: data.addressInfo,
      cookIndex: data.cookIndex,
      politicians: {
        reps: data.reps || null,
        senators: data.senators || null
      }
    })
  }

  render(){
    return (
      <div className="ui grid container sixteen column">
        <div className='row'>
          <Header search={this.newAddress} />
        </div>
        <div className='row'>
          <div className='three wide column'>
            <Sidebar reps={this.state.politicians.reps} senators={this.state.politicians.senators}/>
          </div>
          <div className='thirteen wide column'>
            <MainContainer cookIndex={this.state.cookIndex.value} polygon={this.state.polygon} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;