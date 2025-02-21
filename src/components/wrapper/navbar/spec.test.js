import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Navbar from '.';

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
        useRouter: jest.fn(() => ({
        push: mockPush,
        query: { code: '123' },
        pathname: '/current-path',
    })),
}));

const mockStore = configureStore([]);
const store = mockStore({
    reducerBooks: { data: [], loading: false, error: null },
});

describe('<Navbar />', () => {
  test('should render properly', () => {
    render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      );

    expect(screen.getByRole('button', {name: /Sign Up/i})).toBeInTheDocument();
  });

  test('should render login button', async () => {
    render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      );

    const loginButton = screen.getByRole('button', {name: /Login/i});
    expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await waitFor(() => expect(mockPush).toHaveBeenCalledWith('/login'));
  })
});
