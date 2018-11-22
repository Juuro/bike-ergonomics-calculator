import React, { Component } from 'react';
import './App.scss';

import Measurement from './components/measurement/measurement';
import BikeFitValues from './components/bike-fit-values/bike-fit-values';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>The Bike Ergonomics Calculator</h1>
        </header>

        <main className="grid">
          <form>
            <Measurement label="Größe" name="height" />
            <Measurement label="Schrittlänge" name="inside-leg" />
            <Measurement label="Schulterbreite" name="bead-seat-width" />
            <Measurement label="Rumpflänge" name="torso-length" />
            <Measurement label="Armlänge" name="arms-length" />
            <Measurement label="Brustumfang" name="chest-circumference" />
            <Measurement label="Taillenumfang" name="waist-circumference" />
            <Measurement label="Hüftumfang" name="hip-circumference" />
            <Measurement label="Handumfang" name="hand-circumference" />
            <Measurement label="Kopfumfang" name="head-circumference" />
            <Measurement label="Sitzknochenabstand" name="sit-bones-distance" />
          </form>

          <div className="bike-fit-values">
            <BikeFitValues />
          </div>
        </main>

        <footer>
          &copy; Sebastian Engel {(new Date()).getFullYear()}
        </footer>
      </div>
    );
  }
}
