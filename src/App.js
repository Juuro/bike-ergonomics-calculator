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
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>
            The Bike Ergonomics Calculator
          </h1>
        </header>

        <main className="grid">
          <form className="measurements">
            <Measurement label="Schrittlänge" name="insideLegLength" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Rumpflänge" name="torsoLength" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Armlänge" name="armsLength" onMeasurementChange={this.handleMeasurementChange} />
            <Measurement label="Sitzknochenabstand" name="sitBonesDistance" onMeasurementChange={this.handleMeasurementChange} />
          </form>

          <div className="bike-fit-values">
            <BikeFitValues measurements={this.state.measurements} />
          </div>
        </main>

        <footer>
          &copy; Sebastian Engel {(new Date()).getFullYear()} &middot; <span id="a2hs">A2HS</span>
        </footer>
      </div>
    );
  }
}
