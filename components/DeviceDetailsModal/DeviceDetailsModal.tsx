// @ts-nocheck
import { MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import interact from 'interactjs';
import styles from './DeviceDetailsModal.module.scss';
import { connectionStateMatcher } from '../../utils/connectionStateMatcher';
import { setConnectionStatusColor } from '../../utils/setConnectionStatusColor';

type ConnectionStateType = 'connected' | 'disconnected' | 'poorConnection';

type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>;
type Range<T extends number> = number extends T ? number : _Range<T, []>;

type BrightnessType = Range<100>;

interface DeviceDetailsModalProps {
  id: string;
  name: string;
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
  id,
  name,
  isModalVisible,
  handleClose,
  connectionState,
  isTurnedOn,
  brightness,
  color,
  powerConsumption,
  temperature,
}: DeviceDetailsModalProps): ReactElement | null {
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [modalSize, setModalSize] = useState({ width: 0, height: 0 });

  const isTurnedOnToText = isTurnedOn === true ? 'Device turned on.' : 'Device is turned off.';
  const getIsTurnedOnClassName = isTurnedOn ? 'deviceOn' : 'deviceOff';

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
        <p className={styles.modalDeviceName}>{name}</p>
        <p className={styles.modalDeviceID}>ID: {id}</p>
        <p className={styles.modalConnectionState}>
          <span
            className={`${styles.modalConnectionStateText} ${
              styles[setConnectionStatusColor(connectionState)]
            }`}
          >
            {connectionStateMatcher(connectionState)}
          </span>
          <span className={`${styles.modalConnectionStateIcon} ${styles[connectionState]}`}></span>
        </p>
        {typeof isTurnedOn === 'boolean' && (
          <p className={styles.detailsItem}>
            <span className={styles[getIsTurnedOnClassName]}>{isTurnedOnToText}</span>
          </p>
        )}
        {typeof brightness === 'number' && (
          <p className={styles.detailsItem}>Brightness level: {brightness}</p>
        )}
        {color && (
          <div className={styles.detailsItem}>
            Color:
            <span
              style={{
                backgroundColor: color,
              }}
              className={styles.colorPreview}
            >
              {color}
            </span>
          </div>
        )}
        {typeof powerConsumption === 'number' && (
          <p className={styles.detailsItem}>Power consumption: {powerConsumption} watts</p>
        )}
        {typeof temperature === 'number' && (
          <p className={styles.detailsItem}>Temperature: {temperature}°C</p>
        )}
      </div>
    </div>
  ) : null;
}
