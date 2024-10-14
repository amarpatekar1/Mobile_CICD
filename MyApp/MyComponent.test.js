import React from 'react';
import { render } from '@testing-library/react-native';
import MyComponent from './MyComponent';

test('renders correctly', () => {
  const { getByText } = render(<MyComponent />);
  expect(getByText('Hello, World!')).toBeTruthy();
});

