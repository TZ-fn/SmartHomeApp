import '@testing-library/jest-dom';
import { mockedFetch } from './__tests__/mockedFetch';

beforeEach(() => {
  window.fetch = jest.fn(mockedFetch);
});
