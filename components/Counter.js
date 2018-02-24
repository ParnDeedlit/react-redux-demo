import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    // 子类在获取this前必须调用super
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

//这里真是服了,不知道什么原因导致PropTypes找不到,一直为null,先屏蔽把
//总之通过React来获取PropTypes被deprecate了，不再建议使用，要用PropTypes应该从prop-types来导入。
Counter.propTypes = {
  // value必须为数字，且必须存在
  value: PropTypes.number.isRequired,
  // onIncrement必须为fucntion，且必须存在
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
