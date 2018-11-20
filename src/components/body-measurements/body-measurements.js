import React, { Component } from 'react';

class BodyMeasurements extends Component {
  render() {
    return (
      <div class="d-grid">
        <span>Größe</span><input type="number" name="height" />
        <span>Schrittlänge</span><input type="number" name="inside-leg" />
        <span>Schulterbreite</span><input type="number" name="bead-seat-width" />
        <span>Rumpflänge</span><input type="number" name="torso-length" />
        <span>Armlänge</span><input type="number" name="arms-length" />
        <span>Brustumfang</span><input type="number" name="chest-circumference" />
        <span>Taillenumfang</span><input type="number" name="waist-circumference" />
        <span>Hüftumfang</span><input type="number" name="hip-circumference" />
        <span>Handumfang</span><input type="number" name="hand-circumference" />
        <span>Kopfumfang</span><input type="number" name="head-circumference" />
        <span>Sitzknochenabstand</span><input type="number" name="sit-bones-distance" />
      </div>
    );
  }
}

export default BodyMeasurements;
