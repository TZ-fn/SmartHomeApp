import { Dispatch, MouseEventHandler, ReactElement, SetStateAction, useEffect } from 'react';
import interact from 'interactjs';
import styles from './DeviceDetailsModal.module.scss';
import { DragEvent } from '@interactjs/types';

interface DeviceDetailsModalProps {
  isModalVisible: boolean;
  handleClose: MouseEventHandler;
  modalPosition: { x: number; y: number };
  setModalPosition: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}

export default function DeviceDetailsModal({
  handleClose,
  isModalVisible,
  modalPosition,
  setModalPosition,
}: DeviceDetailsModalProps): ReactElement | null {
  useEffect(() => {
    let draggableModal = interact('.draggable');
    if (draggableModal !== undefined) {
      draggableModal.draggable({
        listeners: {
          start(event: DragEvent) {
            event.target.style.transform = `translate(${modalPosition.x}px, ${modalPosition.y}px)`;
          },
          move(event: DragEvent) {
            setModalPosition({ ...modalPosition, x: (modalPosition.x += event.dx) });
            setModalPosition({ ...modalPosition, y: (modalPosition.y += event.dy) });
            event.target.style.transform = `translate(${modalPosition.x}px, ${modalPosition.y}px)`;
          },
        },
      });
    }
  }, []);

  return isModalVisible ? (
    <div className={`${styles.modalContainer} draggable resizable`}>
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
          <span className={`${styles.modalConnectionStateText} ${styles.textConnected}`}>
            connected
          </span>
          .<span className={`${styles.modalConnectionStateIcon} ${styles.connected}`}></span>
        </p>
      </div>
    </div>
  ) : null;
}
