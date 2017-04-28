import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="dm-builder-app">
        <div className="dm-builder-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Dungeon Builder</h2>
        </div>
        <p className="dm-builder-intro">
          First thing to do is to create a grid. I'm looking at using foundation. For now though lets just roll our own.
        </p>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </div>
    );
  }
}

class Grid extends Component {
  render() {
    return(
      <div className="dn-builder-grid container">
        <div className="row">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
        <div className="row">
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
        </div>
        <div className="row">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
    );
  }
}

export default App;
