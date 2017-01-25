import React from 'react';
import Signup from './Signup.js';
import AddSubReddit from './AddSubReddit.js';
import RemoveSubReddit from './RemoveSubReddit.js';


class Header extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className='header'>
        <AddSubReddit snoowrapCredentials={this.props.snoowrapCredentials} />
        <div id='displaypopup'></div>
        <Signup />
      </div>
    );
  }
}
export default Header;


// <RemoveSubReddit />