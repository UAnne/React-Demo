import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Button from 'antd/es/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>jflaksdjfkaldsjfk</p>
          <Button type="primary">antd</Button>
        </header>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Button type="primary">Button</Button>
//       </div>
//     );
//   }
// }

export default App;
