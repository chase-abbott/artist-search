/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ArtistReleases from './ArtistReleases';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return {
        releases: [...Array(5)].map((_, i) => {
          return {
            id: '12345' + i,
            'cover-art-archive': {
              front: true
            },
            title: 'The Smiths'
          };
        })
      };
    }
  });
});

describe('Artist Releases', () => {
  it('tests the behavior of the artist releases container', async () => {
    render(<Router initialEntries={[{ state: { name: 'The Smiths' } }]}><ArtistReleases/></Router>);
    expect(fetch).toBeCalledTimes(1);

    const list = await screen.findByRole('list');
    expect(list.children.length).toBe(5);

    const link = await screen.findAllByRole('link');
    fireEvent.click(link[0]);
  });
});
