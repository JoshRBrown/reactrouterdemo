import React, { Component } from 'react';
import './App.css';

import {Route, Link} from 'react-router-dom';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route path='/' exact={true} component={Landing} />
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

const Landing = (props) => {
  return (
    <div>
      <h1>Landing page</h1>
    </div>
  )
}

export default App;
