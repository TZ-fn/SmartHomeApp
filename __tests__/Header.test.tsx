import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Tests for the Header component', () => {
  it('renders the main logo correctly', () => {
    render(<Header />);
    const mainLogo = screen.getByText(/SmartHome/);
    expect(mainLogo).toBeInTheDocument();
  });

  it('renders the user control icons correctly', () => {
    render(<Header />);
    const loginButton = screen.getByText(/Login\/Account/);
    const settingsButton = screen.getByText(/Settings/);
    expect(loginButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });
});
