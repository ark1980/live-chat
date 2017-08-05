import React, { Component } from 'react';
import './App.css';
import Message from './Component/Message'
import messages from './seed_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message data={messages} />
      </div>
    );
  }
}

export default App;
