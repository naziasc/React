import React, {Component} from 'react';

class Picture extends Component {
  constructor (props){
    super(props);
    this.state = {
      count:0
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h3>count: {this.state.count}</h3>
        <img src={this.props.url} alt = {this.props.title} width = {this.props.width}/>
      </div>
    )
  }
}

export default Picture;
