import React from 'react';
import ReactDOM from 'react-dom';
import BikeFitValues from './bike-fit-values';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BikeFitValues />, div);
  ReactDOM.unmountComponentAtNode(div);
});
