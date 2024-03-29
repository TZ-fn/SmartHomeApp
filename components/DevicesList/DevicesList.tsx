import { MouseEvent, ReactElement, useEffect, useState } from 'react';
import DeviceCard from './DeviceCard/DeviceCard';
import styles from './DevicesList.module.scss';
import DeviceDetailsModal, {
  DeviceDetailsModalProps,
} from '../DeviceDetailsModal/DeviceDetailsModal';
import { ConnectionStateType } from '../../mockedAPIdata/devices';
import { useFetch } from '../../hooks/useFetch';
import { socketEvents } from '../../utils/socketEvents';
import { Socket, io } from 'socket.io-client';

type activeDeviceIDs = keyof typeof socketEvents.devices;

export default function DevicesList(): ReactElement {
  const [isDeviceDetailsModalVisible, setIsDeviceDetailsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<DeviceDetailsModalProps>();
  const [activeDevice, setActiveDevice] = useState<string>();
  const devicesData = useFetch('/api/v1/devices');
  const socket: Socket = io();

  const socketInitializer = async () => {
    await fetch('/api/v1/refresh');

    if (isDeviceDetailsModalVisible) {
      if (activeDevice) {
        socket.emit(socketEvents.devices[activeDevice as activeDeviceIDs]);
      }
      socket.on(socketEvents.updateDevice, (device) => {
        setModalData(device);
      });
    }
  };

  useEffect(() => {
    socketInitializer();
    return () => {
      socket.emit(socketEvents.stopRefreshing);
      socket.disconnect();
    };
  }, [socketInitializer, isDeviceDetailsModalVisible, activeDevice, socket]);

  const handleDeviceClick = async (e: MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    setActiveDevice(target.dataset.deviceid);
    const data = await fetch(`/api/v1/devices/${target.dataset.deviceid}`);
    const parsedData = await data.json();
    setModalData(parsedData);
    setIsDeviceDetailsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsDeviceDetailsModalVisible(false);
  };

  return (
    <>
      {modalData && (
        <DeviceDetailsModal
          isModalVisible={isDeviceDetailsModalVisible}
          handleClose={handleModalClose}
          id={modalData.id}
          name={modalData.name}
          connectionState={modalData.connectionState as ConnectionStateType}
          isTurnedOn={modalData.isTurnedOn}
          brightness={modalData.brightness}
          color={modalData.color}
          powerConsumption={modalData.powerConsumption}
          temperature={modalData.temperature}
        />
      )}
      <ul className={styles.deviceListContainer}>
        {devicesData !== undefined &&
          devicesData.map(({ type, id, name, connectionState }) => {
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
      </ul>
    </>
  );
}
