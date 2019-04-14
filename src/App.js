import React, { Component } from 'react';
import CacheBuster from './CacheBuster';
import './App.css';

class App extends Component {
  render() {
    return (
      <CacheBuster>
        <div className="App">
          <header className="App-header">
            <h1>Cache Busting - Example</h1>
            <p>
              Bundle version - <code>v{global.appVersion}</code>.
            </p>
          </header>
        </div>
      </CacheBuster>
    );
  }
}

export default App;
