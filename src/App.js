import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header'
import MainContainer from './containers/MainContainer'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
