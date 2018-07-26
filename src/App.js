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
        <Route path='/blank/:blanker' component={Blanker} />
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

const formatAsLink = (toUrl, name) => {
  return <li><Link to={`${toUrl}/${name}`}>{name}</Link></li>

}


const Blank = (props) => {
  // console.log(props)
  let allBlanks = [
    'Blanker',
    'Blankest',
    'Blankester'
  ]
  return (
    <div>
      <h1>Blank</h1>
      <ul>
        {allBlanks.map(blank => formatAsLink(props.match.url, blank))}
        {/* <li><Link to={`${props.match.url}/blanker`}>Blanker</Link></li> */}
        {/* <li><Link to={`${props.match.url}/blankest`}>Blankest</Link></li> */}
        {/* <li><Link to={`${props.match.url}/blankester`}>Blankester</Link></li> */}
      </ul>
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

const Blanker = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>{props.match.params.blanker}</h1>
    </div>
  )
}





export default App;
