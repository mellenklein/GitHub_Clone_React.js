import React from 'react';

class Counter extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.count}</span> Repos.
      </div>
    )
  }
}

export default Counter;
