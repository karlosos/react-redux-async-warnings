import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './testUtils';
import Api from './fakeApi';
import userEvent from '@testing-library/user-event';

describe('App test', () => {
  beforeAll(() => {
    jest.spyOn(Api, 'getValue');
  })
  
  test('WHEN component rendered THEN counter value is being loaded', () => {
    // WHEN
    renderWithProviders(<App />)

    // THEN
    expect(Api.getValue).toHaveBeenCalledTimes(1);
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  test('WHEN refetch button clicked THEN counter value is being reloaded', async () => {
    // GIVEN
    renderWithProviders(<App />)
    expect(Api.getValue).toHaveBeenCalledTimes(1);
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading-spinner'));

    // WHEN
    userEvent.click(screen.getByText('Refetch data'))

    // THEN
    expect(Api.getValue).toHaveBeenCalledTimes(2);
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
})