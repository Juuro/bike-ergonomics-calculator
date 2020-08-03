import React, { useState } from 'react'

import Measurement from './components/measurement/measurement'
import Value from './components/value/value'

import './App.scss'

const App = () => {
  const [insideLegLength, setInsideLegLength] = useState(null)
  const [torsoLength, setTorsoLength] = useState(null)
  const [armsLength, setArmsLength] = useState(null)
  const [sitBonesDistance, setSitBonesDistance] = useState(null)

  const calculateSaddleHeight = () => parseInt(insideLegLength) * 0.89

  const calculateSaddleBarDistance = () =>
    (parseInt(armsLength) * 0.95 + parseInt(torsoLength)) / 2 - 7

  const calculateHeightDifference = () =>
    (parseInt(torsoLength) - parseInt(armsLength) * 0.95) / 2

  const calculateAngleBrakeLever = () => {
    const saddleBarDistance = calculateSaddleBarDistance()
    const alpha =
      (Math.acos(
        (-0.5 * Math.pow(torsoLength, 2) +
          0.5 * Math.pow(saddleBarDistance, 2) +
          0.5 * Math.pow(parseInt(armsLength), 2)) /
          (saddleBarDistance * armsLength)
      ) *
        180) /
      Math.PI
    const beta =
      (Math.asin(calculateHeightDifference() / calculateSaddleBarDistance()) *
        180) /
      Math.PI

    return alpha + beta
  }

  const calculateSaddleWidth = () => parseInt(sitBonesDistance) + 2

  return (
    <div className="app">
      <header>
        <h1>The Bike Ergonomics Calculator</h1>
      </header>

      <main className="grid">
        <form className="measurements">
          <Measurement
            label="Schrittlänge"
            name="insideLegLength"
            onMeasurementChange={setInsideLegLength}
          />
          <Measurement
            label="Rumpflänge"
            name="torsoLength"
            onMeasurementChange={setTorsoLength}
          />
          <Measurement
            label="Armlänge"
            name="armsLength"
            onMeasurementChange={setArmsLength}
          />
          <Measurement
            label="Sitzknochenabstand"
            name="sitBonesDistance"
            onMeasurementChange={setSitBonesDistance}
          />
        </form>

        <div className="bike-fit-values">
          <Value
            label="Sattelhöhe"
            calculateValue={calculateSaddleHeight}
            round={true}
            unit={'cm'}
          />
          <Value
            label="Sattel-Lenker-Abstand"
            calculateValue={calculateSaddleBarDistance}
            round={true}
            unit={'cm'}
          />
          <Value
            label="Sattel/Lenker-Differenz"
            calculateValue={calculateHeightDifference}
            round={true}
            unit={'cm'}
          />
          <Value
            label="Winkel Bremshebel"
            calculateValue={calculateAngleBrakeLever}
            round={true}
            unit="°"
          />
          <Value
            label="Sattelbreite"
            calculateValue={calculateSaddleWidth}
            round={true}
            unit="cm"
          />
        </div>
      </main>

      <footer>
        &copy; Sebastian Engel {new Date().getFullYear()} &middot;{' '}
        <span id="a2hs">A2HS</span>
      </footer>
    </div>
  )
}

export default App
