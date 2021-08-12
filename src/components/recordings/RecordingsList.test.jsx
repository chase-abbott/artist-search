/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import RecordingsList from './RecordingsList';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Recordings List', () => {
  it('renders a list of recordings to the page', () => {
    const recordings = [...Array(5)].map((_, i) => {
      return {
        id: '12345' + i,
        title: 'The Smiths'
      };
    });

    render(<Router initialEntries={[{ state: { name: 'The Smiths' } }]}> <RecordingsList recordings={recordings}/></Router>);

    const list = screen.getByRole('list');
    expect(list.children.length).toBe(5);

  });
});
