import { render, screen } from '@testing-library/react';
import DeviceCard from '../components/DevicesList/DeviceCard/DeviceCard';
import { ConnectionStateType, SmartDeviceType } from '../mockedAPIdata/devices';

const deviceTypes = {
  bulb: 'bulb',
  outlet: 'outlet',
  temperatureSensor: 'temperatureSensor',
};

const deviceNames = {
  smartBulb: 'Smart Bulb',
  smartOutlet: 'Smart Outlet',
  smartTemperatureSensor: 'Smart Temperature Sensor',
};

const connectionStates = {
  connected: 'connected',
  disconnected: 'disconnected',
  poorConnection: 'poorConnection',
};

describe('Tests for the DeviceCard component', () => {
  it('renders correctly', () => {
    render(
      <DeviceCard
        type={deviceTypes.bulb as SmartDeviceType}
        id={'1'}
        name={deviceNames.smartBulb}
        key={'1'}
        connectionState={connectionStates.connected as ConnectionStateType}
        onClick={(e) => e}
      />,
    );
    const deviceName = RegExp(deviceNames.smartBulb);
    expect(screen.getByText(deviceName)).toBeInTheDocument();
  });

  it('is styled properly', () => {
    render(
      <DeviceCard
        type={deviceTypes.bulb as SmartDeviceType}
        id={'1'}
        name={deviceNames.smartBulb}
        key={'1'}
        connectionState={connectionStates.disconnected as ConnectionStateType}
        onClick={(e) => e}
      />,
    );
    const connectionInfo = screen.getByText(/Disconnected/);
    // console.log(window.getComputedStyle(connectionInfo));
    console.log(screen);
    expect(connectionInfo).toHaveStyle('visibility: visible;');
  });

  // it('renders the user control icons correctly', () => {
  //   render(<DeviceCard />);
  //   const loginButton = screen.getByText(/Login\/Account/);
  //   const settingsButton = screen.getByText(/Settings/);
  //   expect(loginButton).toBeInTheDocument();
  //   expect(settingsButton).toBeInTheDocument();
  // });
});
