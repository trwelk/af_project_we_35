import React from 'react';
import renderer from 'react-test-renderer';
import Heading1 from '../Heading1';


it('renders Heading 1 correctly', () => {
  const tree = renderer
    .create(<Heading1 data={{heading:"heading"}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});