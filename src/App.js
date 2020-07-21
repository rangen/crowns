import React from 'react';
import './App.css';
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'
import Sidebar from './containers/Sidebar'
import api from './services/api'

class App extends React.PureComponent {
  state = {
    polygon: null,
    politicians: null,
    cookIndex: {
      value: null
    }
  }

  newAddress = (e) => {
    e.preventDefault()
    const address = document.getElementById('addressField').value
    
    api.search(address)
      .then(resp=>resp.json())
      .then(json=>this.setAddress(json))    
  }

  setAddress = (data) => {
    this.setState({
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
            <Sidebar />
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