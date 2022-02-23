import { ReactElement } from 'react';
import DeviceCard from './DeviceCard/DeviceCard';
import styles from './DevicesList.module.scss';

export default function DevicesList(): ReactElement {
  return (
    <div className={styles.deviceListContainer}>
      <DeviceCard
        type='bulb'
        id='73DFC917D8'
        name='SmartBulb'
        connectionState='connected'
        isTurnedOn={true}
      />
      <DeviceCard
        type='outlet'
        id='15031F132F'
        name='SmartOutlet'
        connectionState='disconnected'
        isTurnedOn={false}
      />
      <DeviceCard
        type='temperatureSensor'
        id='E78C0467EF'
        name='SmartTemperature Sensor'
        connectionState='poorConnection'
        isTurnedOn={true}
      />
    </div>
  );
}
