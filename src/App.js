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
        <div style={{padding: '70px'}}>
        <Grid container spacing={1}>
          <Grid item className='flex-col-scroll' xs={3} style={{height: '90vh'}}>
            <Sidebar />
          </Grid>
          <Grid item className='flex-col-scroll' xs={8} style={{height: '90vh'}}>
            <MainContainer />
          </Grid>
        </Grid>
        </div>
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