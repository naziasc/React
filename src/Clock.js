import React, { Component } from 'react';
import ShowTime from './ShowTime';

class Clock extends Component {
  constructor(props) {
      super(props);
      this.state = {
          date: new Date()
      };
  }

 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

 componentWillUnmount()  {
    clearInterval(this.timerID);
  }

 tick() {
    //this.setState({
    //date: new Date()
    //});
    this.setState((prevState, props) => ({
    date: new Date()
}));
  }

 render() {
    return (
      <div>
        <h1>the time is ...</h1>
        <ShowTime time = {this.state.date.toLocaleTimeString()} />
      </div>
    );
  }
}

export default Clock;
