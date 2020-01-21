import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>Temperature</h2>
          <button onClick={console.log(this.usePosition)}></button>
        </header>
      </div>
    );
  }
}

export default App;
