import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <RenderOther other={RenderMe}  text='there'/>
      </div>
    );
  }
}

const RenderOther = ({other: OtherComponent, ...rest}) => {
  return (
    <div>
      <h1>I am Render Other!!</h1>
      <OtherComponent {...rest} />
    </div>
  )
}

const RenderOther2 = ({other: OtherComponent}) => {
  return (
    <div>
      <h1>I too am Render Other</h1>
      <OtherComponent />
    </div>
  )
}

class RenderMeToo extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

const RenderMe = (props) => {
  return (
    <ul>
      <li>Hey</li>
      <li>{props.text}</li>
    </ul>
  )
}


export default App;
