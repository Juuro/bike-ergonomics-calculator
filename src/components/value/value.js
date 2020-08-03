import React from 'react'

const Value = props => {
  const getContent = () => {
    let value = props.calculateValue()
    if (props.round) {
      value = Math.round(value)
    }
    if (value !== 0 && value !== null) {
      return (
        <div className="value">
          {props.label}:{' '}
          <span className="value-number">{value || ' '}</span> {props.unit}
        </div>
      )
    }
    return null
  }

  
  return getContent()
}

export default Value
