import React from 'react';
import AddSubReddit from './AddSubReddit.js';


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header'>
        <AddSubReddit snoowrapCredentials={this.props.snoowrapCredentials} />
        <div id='displaypopup'></div>
      </div>
    );
  }
}
export default Header;
