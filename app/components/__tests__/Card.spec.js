import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../Card';

describe('Card component', () => {
  it('renders correctly', () => {
    const component = render(<Card />);
    expect(component).toMatchSnapshot();
  });
});
