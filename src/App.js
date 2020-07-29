import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Grid } from '@material-ui/core'

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

const App = () => (

      <>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item className='flex-col-scroll' xs={3}>
            <Sidebar />
          </Grid>
          <Grid item className='flex-col-scroll' xs={9}>
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