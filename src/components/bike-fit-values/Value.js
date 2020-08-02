import React, { Component } from 'react';

//import './value.scss';

export default class Value extends Component {

  getContent = () => {
    let value = this.props.calculateValue();
    if (this.props.round) {
      value = Math.round(value);
    }
    if (value !== 0 && value !== null) {
      return <div className="value">{this.props.label}: <span className="value-number">{value}</span> {this.props.unit}</div>
    }
    return null;
  }

  render() {
    return (this.getContent());
  }
}
