import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';


test('renders greeting message', () => {
  render(<Greeting name="Ani" />);
const greetingText = screen.getByText(/Hello, Ani!/i);
  expect(greetingText).toBeInTheDocument();
});
