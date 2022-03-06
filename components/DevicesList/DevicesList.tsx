import { MouseEvent, ReactElement, useEffect, useState } from 'react';
import DeviceCard from './DeviceCard/DeviceCard';
import styles from './DevicesList.module.scss';
import DeviceDetailsModal from '../DeviceDetailsModal/DeviceDetailsModal';
import { SmartDeviceDetails } from '../../mockedAPIdata/devicesDetails';
import { useFetch } from '../../hooks/useFetch';
import io from 'Socket.IO-client';

export default function DevicesList(): ReactElement {
  const [isDeviceDetailsModalVisible, setIsDeviceDetailsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<SmartDeviceDetails>();
  const devicesData = useFetch('http://localhost:3000/api/v1/devices');
  let socket;

  const handleDeviceClick = async (e: MouseEvent) => {
    const data = await fetch(
      `http://localhost:3000/api/v1/devices/${e.currentTarget.dataset.deviceid}`,
    );
    const parsedData = await data.json();
    setModalData(parsedData);
    setIsDeviceDetailsModalVisible(true);
  };

  const socketInitializer = async () => {
    await fetch('/api/v1/refresh');
    socket = io();

    socket.on('connect', () => {
      console.log('connected');
    });

    // socket.emit('refresh-SmartBulb');

    setTimeout(() => {
      socket.emit('stop-refreshing');
    }, 10000);

    socket.on('update-SmartBulb', (SmartBulb) => {
      console.log(SmartBulb);
    });
  };

  useEffect(() => socketInitializer(), []);

  const handleModalClose = () => setIsDeviceDetailsModalVisible(false);
  return (
    <>
      {modalData && (
        <DeviceDetailsModal
          isModalVisible={isDeviceDetailsModalVisible}
          handleClose={handleModalClose}
          id={modalData.id}
          connectionState={modalData.connectionState}
          isTurnedOn={modalData.isTurnedOn}
          brightness={modalData.brightness}
          color={modalData.color}
          powerConsumption={modalData.powerConsumption}
          temperature={modalData.temperature}
        />
      )}
      <div className={styles.deviceListContainer}>
        {devicesData.map(({ type, id, name, connectionState }) => {
          return (
            <DeviceCard
              type={type}
              id={id}
              name={name}
              key={id}
              connectionState={connectionState}
              onClick={(e) => handleDeviceClick(e)}
            />
          );
        })}
      </div>
    </>
  );
}
