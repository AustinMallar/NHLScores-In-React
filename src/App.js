import React, { Component } from 'react';
import Main from './components/main'
import Header from './components/header';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Main />
      </div>
    );
  }
}

export default App;
