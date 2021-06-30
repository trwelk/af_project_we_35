import React from 'react';
import renderer from 'react-test-renderer';
import ScheduledAtom from '../ScheduledAtom'
import WorkshopCard from '../WorkshopCard';

it('renders correctly', () => {
  const tree = renderer
    .create(<WorkshopCard workshop={{conductor:"conductor",title:"title",description:"des"}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});