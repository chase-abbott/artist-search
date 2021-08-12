import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistList from './ArtistList';
import { MemoryRouter as Router } from 'react-router-dom';

describe('ArtistList', () => {
  it('renders a list component', () => {
    const data = [...Array(5)].map((_, i) => {
      return { id: '12345' + i,
        name: 'The Smiths',
        disambiguation: '60s band'
      };
    });

    render(<Router><ArtistList results={data}/></Router>);

    const list = screen.getByRole('list');

    expect(list.children.length).toBe(5);

  });
});
