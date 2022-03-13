import { render, screen } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import DevicesList from '../components/DevicesList/DevicesList';
import DeviceCard from '../components/DevicesList/DeviceCard/DeviceCard';
import { deviceTypes, deviceNames, connectionStates } from './mockedTestsData';
import { ConnectionStateType, SmartDeviceType } from '../mockedAPIdata/devices';

describe('Tests for the DataList component', () => {
  it('renders correctly', () => {
    render(<DevicesList />);
    expect(screen.getAllByRole('li')).toHaveLength(3);
  });

  // it('opens a modal when clicked', async () => {
  //   render(
  //     <DeviceCard
  //       type={deviceTypes.bulb as SmartDeviceType}
  //       id={'1'}
  //       name={deviceNames.smartBulb}
  //       key={'1'}
  //       connectionState={connectionStates.disconnected as ConnectionStateType}
  //       onClick={(e) => e}
  //     />,
  //   );
  //   const deviceCardName = new RegExp(deviceNames.smartBulb);
  //   const deviceCard = screen.getByText(deviceCardName);
  //   fireEvent.click(deviceCard);
  //   await waitFor(() => {
  //     console.log(screen.debug());
  //     expect(screen.getAllByText(deviceCardName)).toHaveLength(2);
  //   });
  // });
});
