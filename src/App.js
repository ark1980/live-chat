import React, { Component } from 'react';
import './App.css';
import Message from './Message'
import messages from './seed_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        {messages.map((item, i) => 
          <Message key={i} data={item} />
        )}
      </div>
    );
  }
}

export default App;
