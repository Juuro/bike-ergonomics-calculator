import React, { Component } from 'react';

import Measurement from './components/measurement/measurement';
import BikeFitValues from './components/bike-fit-values/bike-fit-values';

import './App.scss';

export default class App extends Component {
  state = {
    measurements: {
      height: null,
      insideLegLength: null,
      beadSeatWidth: null,
      torsoLength: null,
      armsLength: null,
      chestCircumference: null,
      waistCircumference: null,
      hipCircumference: null,
      handCircumference: null,
      headCircumference: null,
      sitBonesDistance: null
    }
  }

  handleMeasurementChange = (name, measurement) => {
    this.setState({measurements: {...this.state.measurements, [name]: measurement}});
    console.log(this.state);
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>The Bike Ergonomics Calculator</h1>
        </header>

        <main className="grid">
          <form>
            <Measurement label="Größe" name="height" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Schrittlänge" name="insideLegLength" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Schulterbreite" name="beadSeatWidth" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Rumpflänge" name="torsoLength" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Armlänge" name="armsLength" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Brustumfang" name="chestCircumference" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Taillenumfang" name="waistCircumference" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Hüftumfang" name="hipCircumference" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Handumfang" name="handCircumference" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Kopfumfang" name="headCircumference" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Sitzknochenabstand" name="sitBonesDistance" onMeasurementChange={this.handleMeasurementChange} />
          </form>

          <div className="bike-fit-values">
            <BikeFitValues measurements={this.state.measurements} />
          </div>
        </main>

        <footer>
          &copy; Sebastian Engel {(new Date()).getFullYear()}
        </footer>
      </div>
    );
  }
}
