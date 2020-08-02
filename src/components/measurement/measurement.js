import React from 'react'

import './measurement.scss'

const Measurement = (props) => {
  const handleChange = (event) => {
    props.onMeasurementChange(event.target.value)
  }

  return (
    <div className="measurement">
      <label className="label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="input-field"
        id={props.name}
        type="number"
        required
        name={props.name}
        min="1"
        max="300"
        onChange={handleChange}
      />
      <span className="unit">cm</span>
    </div>
  )
}

export default Measurement
