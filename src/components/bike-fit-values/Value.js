import React, { Component } from 'react';

//import './value.scss';

export default class Value extends Component {
  render() {
    return (
      <div className="value">
        {this.props.label}: {this.props.calculateValue()}
      </div>
    );
  }
}
