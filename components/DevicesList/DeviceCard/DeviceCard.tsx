import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './DeviceCard.module.scss';
import BulbIcon from '../../../public/icons/reshot-icon-electric-bulb-BZU4KM2VQA.svg';
import OutletIcon from '../../../public/icons/reshot-icon-plug-and-socket-ANZ3VHW8SC.svg';
import TemperatureSensorIcon from '../../../public/icons/reshot-icon-thermometer-45AGZRX8JW.svg';
import { connectionStateMatcher } from '../../utils/connectionStateMatcher';

type DeviceType = 'bulb' | 'outlet' | 'temperatureSensor';

type ConnectionStateType = 'connected' | 'disconnected' | 'poorConnection';

interface DeviceCardProps {
  type: DeviceType;
  id: string;
  name: string;
  connectionState: ConnectionStateType;
}

export default function DeviceCard({
  type,
  id,
  name,
  connectionState,
}: DeviceCardProps): ReactElement {
  const selectIconType = (type: DeviceType): any => {
    // I decided to use a switch statement to make adding new devices' types easier
    switch (type) {
      case 'bulb':
        return BulbIcon.src;
      case 'outlet':
        return OutletIcon.src;
      case 'temperatureSensor':
        return TemperatureSensorIcon.src;
      default:
        throw new Error('Unsupported device type.');
    }
  };

  return (
    <div className={styles.cardContainer}>
      <Image width={55} height={55} src={selectIconType(type)} />
      <p className={styles.deviceName}>{name}</p>
      <p className={styles.deviceID}>ID: {id}</p>
      <p className={styles.connectionState}>
        {/* text description for the screen readers */}
        <span className={styles.visuallyHidden}>
          Connection: {connectionStateMatcher(connectionState)}.
        </span>
        <span className={`${styles.connectionStateIcon} ${styles[connectionState]}`}></span>
      </p>
    </div>
  );
}
