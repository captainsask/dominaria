import React, { Component } from 'react';
import floor from './assets/templar_stone.jpeg';
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
        <div className="container">
          <Grid />
          <Grid />
          <Grid />
          <Grid />
          <Grid />
          <Grid />
        </div>
      </div>
    );
  }
}

class Grid extends Component {
  render() {
    return(
      <div className="dn-builder-grid">
        <div className="row">
          <Row />
          <Row />
          <Row />
        </div>
        <div className="row">
          <Row />
          <Row />
          <Row />
        </div>
        <div className="row">
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    );
  }
}

class Row extends Component {
  render() {
    return(
      <div className="row"><img src={floor} className="floor-tile" alt="Floor Tile"/> </div>
    );
  }
}

export default App;
