import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ReleaseList from './ReleaseList';

describe('Release List', () => {
  it('renders a list of releases to the page', () => {
    const releases = [...Array(5)].map((_, i) => {
      return {
        id: '12345' + i,
        'cover-art-archive': {
          front: true
        },
        title: 'The Smiths',
      };
    });

    const artist = {
      name: 'The Smiths'
    };

    render(<Router><ReleaseList artist={artist} releases={releases}/></Router>);

    const list = screen.getByRole('list');
    expect(list.children.length).toBe(5);
  });
});
