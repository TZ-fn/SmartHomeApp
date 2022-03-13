import '@testing-library/jest-dom';

beforeEach(() => {
  window.fetch = jest.fn(() => Promise.resolve({} as Response));
});
