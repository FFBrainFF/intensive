import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Hello />
        <SayFullName name="Andrey" secondName="Pakhmutov" link="vk.com" />
        <SayFullName name="Andrey" secondName="Pakhmutov" link="vk.com" />
        <SayFullName name="Andrey" secondName="Pakhmutov" link="vk.com" />
      </div>
    );
  }
}

function Hello () {
  let fase = "dodod"
  return (
      <h1>Hello, {fase}</h1>
    )
}

function SayFullName(props) {
  return (
    <div>
      <h1>My name is {props.name}, 2nd name - {props.secondName}</h1>
      <a href={props.link}>Link VK</a>
    </div>
    )
}

export default App;
