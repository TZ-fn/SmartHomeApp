import { ReactElement, useEffect, useState } from 'react';
import interact from 'interactjs';
import styles from './DeviceDetailsModal.module.scss';
import { DragEvent } from '@interactjs/types';

export default function DeviceDetailsModal(): ReactElement {
  const [position, setPosition] = useState({ x: 150, y: 100 });

  useEffect(() => {
    let draggableModal = interact('.draggable');
    if (draggableModal !== undefined) {
      draggableModal.draggable({
        listeners: {
          move(event: DragEvent) {
            setPosition({ ...position, x: (position.x += event.dx) });
            setPosition({ ...position, y: (position.y += event.dy) });
            event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
          },
        },
      });
    }
  }, []);

  return (
    <div className={`${styles.modalContainer} draggable resizable`}>
      <div className={styles.modal}>
        <button type='button' className={styles.closeModalButton}>
          X
        </button>
        <p className={styles.modalDeviceName}>Smart Temperature Sensor</p>
        <p className={styles.modalDeviceID}>ID: E78C0467EF</p>
        <p className={styles.modalConnectionState}>
          Connection:
          <span className={`${styles.modalConnectionStateText} ${styles.textConnected}`}>
            connected
          </span>
          .<span className={`${styles.modalConnectionStateIcon} ${styles.connected}`}></span>
        </p>
      </div>
    </div>
  );
}
