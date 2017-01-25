import React from 'react';
import Header from './Header.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div id="App">
        <Header />
        <p id='title'>Reddit Reader</p>
      </div>
    );
  }
}
export default App;