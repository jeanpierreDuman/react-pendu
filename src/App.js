import React, { Component } from 'react';
import Pendu from './Pendu';

class App extends Component {
  render() {
    return (
      <div>
        <Pendu word="pikachu" limit="5" />
      </div>
    );
  }
}

export default App;
