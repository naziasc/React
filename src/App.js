import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Picture from './Picture';
import Clock from './Clock';
import Toggle from './Toggle';
import Greetings from './Greetings';
import Login from './Login';
import List from './List';
import Form from './Form';
import Textarea from './Textarea'

class App extends Component {
  render() {
    const url = "http://www.planwallpaper.com/static/images/IMG_297432_u9SPPDP.jpg"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Greetings isLoggedIn = {false}/>
        <Toggle/>
        <Picture title= "my Super place" url={url} width = "100px"/>
        <Picture title= "my Super peace" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrV8VxWPKSqVzadEcdCbzrrJiAYT8Vl8xxqPII1ysab6_u59bfKg" width = "250px"/>
        <Picture title= "my Super scenery" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwoAIb-s8W_gEe88ntOK15b1RBex323xZEgKEXyVfRrtnZzSF" width = "350px"/>
        <Clock/>
        <Login/>
        <List numbers={[2,5,8]}/>
        <Form/>
      <Textarea/>

      
      </div>
    );
  }
}


export default App;
