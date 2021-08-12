/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => {
    return { artists: [...Array(5)].map((_, i) => {
      return {
        id: '1234' + i,
        name: 'The Smiths',
        disambiguation: '60\'s band'
      };
    }) };
  }
}));

describe('Home Container', () => {
  it('describes the behavior of the Home conatiner', async () => {
    render(<Router><Home/></Router>);

    const button = screen.getByTestId('search');
    fireEvent.click(button);

    const list = await screen.findByRole('list');

    expect(list.children.length).toBe(5);
    
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
