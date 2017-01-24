import React from 'react';
import Signup from './Signup.js';
import AddSubReddit from './AddSubReddit.js';
import RemoveSubReddit from './RemoveSubReddit.js';


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className='Header'>
        <Signup />
        <AddSubReddit />
        <RemoveSubReddit />
      </div>
    );
  }
}
export default Header;