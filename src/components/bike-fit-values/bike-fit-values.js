import React, { Component } from 'react';

import Value from './Value';

import './bike-fit-values.scss';

export default class BikeFitValues extends Component {
  componentDidUpdate = () => {
    console.log("componentDidUpdate", this.props.measurements);
  }

  calculateSaddleHeight = () => {
    return Math.round(this.props.measurements.insideLegLength * .89);
  }

  calculateSaddleBarDistance = () => {
    return this.props.measurements.height / 3.3;
  }

  render() {
    return (
      <>
        <Value label="Sattelhöhe" calculateValue={this.calculateSaddleHeight} />
        <Value label="Sattel-Lenker-Abstand" calculateValue={this.calculateSaddleBarDistance} />
      </>
    );
  }
}
