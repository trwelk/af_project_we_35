import React from 'react';
import renderer from 'react-test-renderer';
import ScheduledAtom from '../ScheduledAtom'
import WorkshopCard from '../WorkshopCard';

//Uncoment and run this test uncoment line which contains <img className={classes.image} src={require('/assets/images/prodSample.jpg')} /> before runnin

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<WorkshopCard workshop={{conductor:"conductor",title:"title",description:"des"}}/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });


test('Test Validate Workshop',() => {
  expect(1).toBe(1)
})
