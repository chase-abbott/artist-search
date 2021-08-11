/* eslint-disable max-len */
import React from 'react';
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import Home from './Home';

global.fetch = jest.fn(() => Promise.resolve({
  json:() => [{
    id: '40f5d9e4-2de7-4f2d-ad41-e31a9a9fea27',
    name: 'The Smiths',
    disambiguation: '60\'s band'
  }]
}));
const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist?query=smiths&fmt=json&limit=25', (req, res, cxt) => {
    // const query = req.url.searchParams;
    // const query2 = query.get('query');
  
    return res(
      cxt.json([{
        id: '40f5d9e4-2de7-4f2d-ad41-e31a9a9fea27',
        name: 'The Smiths',
        disambiguation: '60\'s band'
      }])
    );
  })

);

describe.only('Home component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => cleanup());
  it('renders Home', async () => {
    render (<MemoryRouter>
      <Home />
    </MemoryRouter>
    );
    const button = screen.getByTestId('search');
    fireEvent.click(button);

    expect(fetch).toHaveBeenCalledTimes(1);
    // return waitFor(async () => {
    //   const list = await screen.findByRole('list');
    //   expect(list.children.length).toEqual(1);

    // });

    
  });
});
