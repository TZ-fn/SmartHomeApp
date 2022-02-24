import { ReactElement } from 'react';
import DeviceCard from './DeviceCard/DeviceCard';
import BulbIcon from '../../public/icons/reshot-icon-electric-bulb-BZU4KM2VQA.svg';
import OutletIcon from '../../public/icons/reshot-icon-plug-and-socket-ANZ3VHW8SC.svg';
import TemperatureSensorIcon from '../../public/icons/reshot-icon-thermometer-45AGZRX8JW.svg';
import styles from './DevicesList.module.scss';

export default function DevicesList(): ReactElement {
  return (
    <div className={styles.deviceListContainer}>
      <DeviceCard
        type='bulb'
        id='73DFC917D8'
        name='Smart Bulb'
        connectionState='connected'
        image={BulbIcon}
        isTurnedOn={true}
      />
      <DeviceCard
        type='outlet'
        id='15031F132F'
        name='Smart Outlet'
        connectionState='disconnected'
        image={OutletIcon}
        isTurnedOn={false}
      />
      <DeviceCard
        type='temperatureSensor'
        id='E78C0467EF'
        name='Smart Temperature Sensor'
        connectionState='poorConnection'
        image={TemperatureSensorIcon}
        isTurnedOn={true}
      />
    </div>
  );
}
