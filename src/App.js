import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import custom from './custom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <custom />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header companyname="{Helpers.greets('Ankit Sharma')}"/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
