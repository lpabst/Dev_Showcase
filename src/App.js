import React, { Component } from 'react';
import router from './router';
import NavHeader from './components/NavHeader/NavHeader.js';
import './reset.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">

          <NavHeader />

          { router }

      </div>
    );
  }
}


export default App;
