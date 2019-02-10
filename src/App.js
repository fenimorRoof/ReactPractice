import React, { Component } from 'react';

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

import './App.css';

class App extends Component {
  state = {
   username: 'Eugene'
  };

  eventHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  };
  
  render() {
    const userInputStyle = {
      margin: '3px auto',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <UserOutput username={this.state.username}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </UserOutput>
        <UserOutput username={this.state.username}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </UserOutput>
        <UserOutput username={this.state.username}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </UserOutput>
        <UserInput
          style={userInputStyle}
          onChange={this.eventHandler.bind(this)}
          username={this.state.username}
        > </UserInput>
        <UserInput
          style={userInputStyle}
          onChange={this.eventHandler}
          username={this.state.username}
        > </UserInput>
      </div>
    );
  }
}

export default App;
