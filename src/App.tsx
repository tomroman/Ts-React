import React, { Component } from 'react';
import PokemonSearch from './components1/PokemonSearch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonSearch name="" />
      </div>
    );
  }
}

export default App;
