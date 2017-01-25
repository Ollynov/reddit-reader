import React from 'react';
import Header from './Header.js';
import HotFeed from './HotFeed.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'snoowrapCredentials': new snoowrap({
        userAgent: '<browser> Javascript ollynov14.Here we go',
        clientId: 'bQrCovIpgmO1yQ',
        clientSecret: 'OB-W4WPLl-PeYrgp2MVqw5kI95s',
        username: 'ollynov14',
        password: 'Ucsbsoph9!'
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