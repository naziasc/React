import React, { Component } from 'react';

//const numbers = [1, 2, 3, 4, 5];

class List extends Component{


  render(){
    const numbers = this.props.numbers;
    var listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
  return  <ul>{listItems}</ul>;

}
}





export default List;
