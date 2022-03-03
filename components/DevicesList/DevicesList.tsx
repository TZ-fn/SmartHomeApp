import { ReactElement, useEffect, useState } from 'react';
import DeviceCard from './DeviceCard/DeviceCard';
import styles from './DevicesList.module.scss';
import DeviceDetailsModal from '../DeviceDetailsModal/DeviceDetailsModal';
import io from 'Socket.IO-client';
import { devices } from '../../mockedAPIdata/devices';

export default function DevicesList(): ReactElement {
  const [isDeviceDetailsModalVisible, setIsDeviceDetailsModalVisible] = useState(true);
  let socket;

  const socketInitializer = async () => {
    await fetch('/api/v1/refresh');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });
  };

  console.log(devices);
  useEffect(() => socketInitializer(), []);

  const handleModalClose = () => setIsDeviceDetailsModalVisible(false);
  return (
    <>
      <DeviceDetailsModal
        isModalVisible={isDeviceDetailsModalVisible}
        handleClose={handleModalClose}
        connectionState='connected'
      />
      <button
        type='button'
        onClick={() => setIsDeviceDetailsModalVisible(!isDeviceDetailsModalVisible)}
      >
        open close
      </button>
      <div className={styles.deviceListContainer}>
        <DeviceCard type='bulb' id='73DFC917D8' name='Smart Bulb' connectionState='connected' />
        <DeviceCard
          type='outlet'
          id='15031F132F'
          name='Smart Outlet'
          connectionState='disconnected'
        />
        <DeviceCard
          type='temperatureSensor'
          id='E78C0467EF'
          name='Smart Temperature Sensor'
          connectionState='poorConnection'
        />
      </div>
    </>
  );
}
