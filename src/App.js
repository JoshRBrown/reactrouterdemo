import React, { Component } from 'react';
import './App.css';

import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blank">Blank</a></li>
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
