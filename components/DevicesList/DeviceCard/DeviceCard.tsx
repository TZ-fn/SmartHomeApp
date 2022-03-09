import { MouseEventHandler, ReactElement } from 'react';
import Image from 'next/image';
import styles from './DeviceCard.module.scss';
import { connectionStateMatcher } from '../../../utils/connectionStateMatcher';
import { setConnectionStatusColor } from '../../../utils/setConnectionStatusColor';

type DeviceType = 'bulb' | 'outlet' | 'temperatureSensor';

type ConnectionStateType = 'connected' | 'disconnected' | 'poorConnection';

interface DeviceCardProps {
  type: DeviceType;
  id: string;
  name: string;
  connectionState: ConnectionStateType;
  onClick: MouseEventHandler;
}

export default function DeviceCard({
  type,
  id,
  name,
  connectionState,
  onClick,
}: DeviceCardProps): ReactElement {
  // Use any to avoid conflicts with @svgr/webpack plugin or babel-plugin-inline-react-svg plugin.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectIconType = (type: DeviceType): any => {
    // I decided to use a switch statement to make adding new devices' types easier
    switch (type) {
      case 'bulb':
        return '/icons/reshot-icon-electric-bulb-BZU4KM2VQA.svg';
      case 'outlet':
        return '/icons/reshot-icon-plug-and-socket-ANZ3VHW8SC.svg';
      case 'temperatureSensor':
        return '/icons/reshot-icon-thermometer-45AGZRX8JW.svg';
      default:
        throw new Error('Unsupported device type.');
    }
  };

  return (
    <div data-deviceid={id} className={styles.cardContainer} onClick={(e) => onClick(e)}>
      <Image width={55} height={55} src={selectIconType(type)} alt={`${name}'s icon.`} />
      <p className={styles.deviceName}>{name}</p>
      <p className={styles.deviceID}>ID: {id}</p>
      <p className={styles.connectionState}>
        <span
          className={`${styles.connectionStateText} ${
            styles[setConnectionStatusColor(connectionState)]
          }`}
        >
          {connectionStateMatcher(connectionState)}
        </span>
        <span className={`${styles.connectionStateIcon} ${styles[connectionState]}`}></span>
      </p>
    </div>
  );
}
