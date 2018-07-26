import React, { Component } from 'react';
import './App.css';

import {Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blank">Blank</Link></li>
        </ul>

        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blank' component={Blank} />
      
      </div>
    );
  }
}

const Home = (props) => {
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  )
}

const About = (props) => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

const Blank = (props) => {
  return (
    <div>
      <h1>Blank</h1>
    </div>
  )
}

export default App;
