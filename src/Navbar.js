import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {

  render() {
    return (
      <ul>
        <li><Link to='/'>Landing</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blank">Blank</Link></li>
      </ul>
    )
  }
}

export default Navbar;