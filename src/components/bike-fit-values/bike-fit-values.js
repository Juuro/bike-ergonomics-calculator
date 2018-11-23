import React, { Component } from 'react';

import './bike-fit-values.scss';

export default class BikeFitValues extends Component {
  componentDidUpdate = () => {
    console.log("componentDidUpdate", this.props.measurements);
  }

  calculateSaddleHeight = () => {
    return Math.round(this.props.measurements.insideLegLength * .89);
  }

  render() {
    return (
      <div className="value">
        Sattelhöhe: {this.calculateSaddleHeight()}
      </div>
    );
  }
}
