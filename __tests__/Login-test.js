import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/screens/Login';
import RootNavigation from '../src/navigations/RootNavigation';

test('renders correctly', () => {
  const tree = renderer.create(<RootNavigation component={Login} />).toJSON();
  expect(tree).toMatchSnapshot();
});