import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Router><App /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
