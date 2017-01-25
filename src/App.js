import React from 'react';
import Header from './Header.js';
import HotFeed from './HotFeed.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'snoowrapCredentials': new snoowrap({
        userAgent: '',
        clientId: '',
        clientSecret: '',
        username: '',
        password: '!'
      })
    };
  }

  render() {
    return (
      <div id="App">
        <Header snoowrapCredentials={this.state.snoowrapCredentials}/>
        <p id='title'>Reddit Reader</p>
        <HotFeed snoowrapCredentials={this.state.snoowrapCredentials}/>
        <p id='articles'></p>
      </div>
    );
  }
}
export default App;