import { MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import interact from 'interactjs';
import styles from './DeviceDetailsModal.module.scss';
import { connectionStateMatcher } from '../utils/connectionStateMatcher';

type ConnectionStateType = 'connected' | 'disconnected' | 'poorConnection';

type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>;
type Range<T extends number> = number extends T ? number : _Range<T, []>;

type BrightnessType = Range<100>;

interface DeviceDetailsModalProps {
  isModalVisible: boolean;
  handleClose: MouseEventHandler;
  connectionState: ConnectionStateType;
  isTurnedOn: boolean;
  brightness?: BrightnessType;
  color?: string;
  powerConsumption?: number;
  temperature?: number;
}

export default function DeviceDetailsModal({
  handleClose,
  isModalVisible,
  connectionState,
  isTurnedOn,
  brightness,
  color,
  powerConsumption,
  temperature,
}: DeviceDetailsModalProps): ReactElement | null {
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [modalSize, setModalSize] = useState({ width: 0, height: 0 });

  const setConnectionStatusColor =
    connectionState === 'connected'
      ? 'textConnected'
      : connectionState === 'disconnected'
      ? 'textDisconnected'
      : 'textPoorConnection';

  useEffect(() => {
    interact('.resize-drag')
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const target = event.target;
            let x = parseFloat(target.getAttribute('data-x')) || 0;
            let y = parseFloat(target.getAttribute('data-y')) || 0;
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
            setModalSize({ width: event.rect.width, height: event.rect.height });
            x += event.deltaRect.right;
            y += event.deltaRect.top;
            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
        },
      })
      .draggable({
        listeners: {
          move: (event) => {
            const target = event.target;
            const x = (parseFloat(target.getAttribute('data-x')) || modalPosition.x) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || modalPosition.y) + event.dy;
            setModalPosition({ x, y });
            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
        },
      });
  }, [modalPosition, modalSize]);

  return isModalVisible ? (
    <div
      className={`${styles.modalContainer} resize-drag`}
      style={{
        transform: `translate(${modalPosition.x}px, ${modalPosition.y}px)`,
        width: modalSize.width,
        height: modalSize.height,
      }}
    >
      <div className={styles.modal}>
        <button
          onClick={handleClose}
          className={styles.closeModalButton}
          type='button'
          aria-label='Close this window.'
        >
          <span aria-hidden='true'>×</span>
        </button>
        <p className={styles.modalDeviceName}>Smart Temperature Sensor</p>
        <p className={styles.modalDeviceID}>ID: E78C0467EF</p>
        <p className={styles.modalConnectionState}>
          Connection:
          <span
            className={`${styles.modalConnectionStateText} ${styles[setConnectionStatusColor]}`}
          >
            {connectionStateMatcher(connectionState)}
          </span>
          .<span className={`${styles.modalConnectionStateIcon} ${styles[connectionState]}`}></span>
        </p>
        <p>isTurnedOn</p>
        <p>brightness</p>
        <p>color</p>
        <p>powerConsumption</p>
        <p>temperature</p>
      </div>
    </div>
  ) : null;
}
