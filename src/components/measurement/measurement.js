import React, { Component } from 'react';

import './measurement.scss';

export default class Measurement extends Component {
  handleChange = event => {
    this.props.onMeasurementChange(event.target.name, Number(event.target.value));
  }

  render() {
    return (
      <div className="measurement">
        <label className="label" htmlFor={this.props.name}>{this.props.label}</label>
        <input className="input-field" id={this.props.name} type="number" name={this.props.name} min="1" max="300" required onChange={this.handleChange} />
        <span className="unit">cm</span>
      </div>
    );
  }
}
