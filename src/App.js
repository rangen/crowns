import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Grid } from '@material-ui/core'

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

const App = () => (
  // static propTypes = {
  //   addressEntered: PropTypes.bool.isRequired,
  //   validAddress: PropTypes.bool,
  //   selectedPolitician: PropTypes.object
  // }
      <>
        <div className='flex-no-shrink'>
          <Header />
        </div>
        <Grid container >
          <Grid
              item sm={3} >
              <Sidebar />
          </Grid>
          <Grid 
            item sm={9} >
            <MainContainer />
          </Grid>
        </Grid>
      </>
)

const mapStateToProps = state => {
  const { politicianSelected, enteredAddress  } = state

  return {
    politicianSelected,
    enteredAddress
  }
}


export default connect(mapStateToProps)(App);