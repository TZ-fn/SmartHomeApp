import { render, screen } from '@testing-library/react';
import DeviceCard from '../components/DevicesList/DeviceCard/DeviceCard';
import { deviceTypes, deviceNames, connectionStates } from './mockedTestsData';
import { ConnectionStateType, SmartDeviceType } from '../mockedAPIdata/devices';

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
    const deviceName = new RegExp(deviceNames.smartBulb);
    expect(screen.getByText(deviceName)).toBeInTheDocument();
  });
});
