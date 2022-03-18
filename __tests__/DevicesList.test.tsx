import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import DevicesList from '../components/DevicesList/DevicesList';

describe('Tests for the DataList component', () => {
  it('renders correctly', async () => {
    render(<DevicesList />);
    // it should have three cards (list items)
    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });

  it('opens a modal when clicked', async () => {
    render(<DevicesList />);
    // get the Smart Outlet card
    const deviceCard = await screen.findByText(/c4c48095-b135/);
    fireEvent.click(deviceCard);
    // details for the Smart Outlet have a 'Power consumption' field
    expect(await screen.findByText(/Power consumption/)).toBeInTheDocument();
  });
});
