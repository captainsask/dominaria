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
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div className="row">
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div className="row">
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    );
  }
}

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState({ revealed: !this.state.revealed });
  }
  render() {
    const { revealed } = this.state;
    return(
      <div className="tile" aria-hidden={!revealed} onClick={this.toggleVisibility}><img src={floor} className="floor-tile" alt="Floor Tile"/> </div>
    );
  }
}

export default App;
