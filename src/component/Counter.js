import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterComponent extends Component {
  increaseCounter = () => {
    const { dispatch } = this.props;
    return dispatch({ type: 'COUNTER_INCREASE' });
  }

  decreaseCounter = () => {
    const { dispatch } = this.props;
    return dispatch({ type: 'COUNTER_DECREASE' });
  }

  render() {
    const { counterProps = 0 } = this.props;
    return (
      <div>
        <button onClick={this.increaseCounter}>Increase</button>
        <div>{counterProps}</div>
        <button onClick={this.decreaseCounter}>Decrrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state, dispatch) => {
  const { counter = {} } = state || {};
  let counterState = counter && counter.counter;
  console.log({ counter });
  return {
    dispatch,
    counterProps: counterState
  };
};

const Counter = connect(mapStateToProps)(CounterComponent);
export default Counter;