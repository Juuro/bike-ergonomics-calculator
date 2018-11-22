import React, { Component } from 'react';

import './measurement.scss';

export default class Measurement extends Component {
  render() {
    return (
      <div className="measurement">
        <label className="label" for={this.props.name}>{this.props.label}</label>
        <input className="input-field" id={this.props.name} type="number" name={this.props.name} min="1" max="300" required />
        <span className="unit">cm</span>
      </div>
    );
  }
}
