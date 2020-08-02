import React, { Component } from 'react';

import Value from './Value';

import './bike-fit-values.scss';

export default class BikeFitValues extends Component {
  calculateSaddleHeight = () => {
    return this.props.measurements.insideLegLength * .89;
  }

  calculateSaddleBarDistance = () => {
    return (this.props.measurements.armsLength * 0.95 + this.props.measurements.torsoLength) / 2 - 7;
  }

  calculateHeightDifference = () => {
    return (this.props.measurements.torsoLength - (this.props.measurements.armsLength * 0.95)) / 2;
  }

  calculateAngleBrakeLever = () => {
    const torsoLength = this.props.measurements.torsoLength;
    const armsLength = this.props.measurements.armsLength;
    const saddleBarDistance = this.calculateSaddleBarDistance();
    const alpha = Math.acos((-0.5*Math.pow(torsoLength, 2)+0.5*Math.pow(saddleBarDistance, 2)+0.5*Math.pow(armsLength, 2))/(saddleBarDistance*armsLength)) * 180 / Math.PI;
    const beta = Math.asin(this.calculateHeightDifference() / this.calculateSaddleBarDistance()) * 180 / Math.PI;

    return alpha + beta;
  }

  calculateSaddleWidth = () => {
    return this.props.measurements.sitBonesDistance + 2;
  }

  render() {
    return (
      <>
        <Value label="Sattelhöhe" calculateValue={this.calculateSaddleHeight} round={true} unit={"cm"} />
        <Value label="Sattel-Lenker-Abstand" calculateValue={this.calculateSaddleBarDistance} round={true} unit={"cm"} />
        <Value label="Sattel/Lenker-Differenz" calculateValue={this.calculateHeightDifference} round={true} unit={"cm"} />
        <Value label="Winkel Bremshebel" calculateValue={this.calculateAngleBrakeLever} round={true} unit="°" />
        <Value label="Sattelbreite" calculateValue={this.calculateSaddleWidth} round={true} unit="cm" />
      </>
    );
  }
}
