import React from 'react';
import renderer from 'react-test-renderer';
import Heading from '../Heading';

describe('Heading', () => {
  test('Default', () => {
    expect(renderer.create(<Heading title="hello" />).toJSON()).toMatchSnapshot();
  });
});
