import React, { Component } from 'react';

class ShowTime extends Component{

  render(){
    return <h1>*** {this.props.time} ***</h1>
  }
}

//const showTime = (props) => <h1>{props.time}</h1>;
export default ShowTime;
