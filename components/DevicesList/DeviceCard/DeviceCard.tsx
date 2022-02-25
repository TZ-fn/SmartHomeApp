import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './DeviceCard.module.scss';

type DeviceType = 'bulb' | 'outlet' | 'temperatureSensor';

type ConnectionStateType = 'connected' | 'disconnected' | 'poorConnection';

type Range<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>;

type BrightnessType = Range<100>;

interface DeviceCardProps {
  type: DeviceType;
  id: string;
  name: string;
  connectionState: ConnectionStateType;
  image: any;
  isTurnedOn: boolean;
  brightness?: BrightnessType;
  color?: string;
  powerConsumption?: number;
  temperature?: number;
}

export default function DeviceCard({
  type,
  id,
  name,
  connectionState,
  image,
  isTurnedOn,
  brightness,
  color,
  powerConsumption,
  temperature,
}: DeviceCardProps): ReactElement {
  const connectionStatus =
    connectionState === 'connected'
      ? 'connected successfully'
      : connectionState === 'disconnected'
      ? 'disconnected'
      : 'connection poor';

  return (
    <div className={styles.cardContainer}>
      <Image width={55} height={55} src={image.src} />
      <p className={styles.deviceName}>{name}</p>
      <p className={styles.deviceID}>ID: {id}</p>
      <p className={styles.connectionState}>
        {/* text description for the screen readers */}
        <span className={styles.visuallyHidden}>Connection: {connectionStatus}.</span>
        <div className={`${styles.connectionStateIcon} ${styles[connectionState]}`}></div>
      </p>
    </div>
  );
}
