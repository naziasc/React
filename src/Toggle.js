import React,{Component}from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, count:0};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      count: prevState.count+1
    }));
  }

  render() {
    return (
      <div>
        {this.state.count}
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
    );
  }
}


export default Toggle;
