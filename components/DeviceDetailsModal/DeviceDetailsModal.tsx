import { MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import interact from 'interactjs';
import styles from './DeviceDetailsModal.module.scss';

interface DeviceDetailsModalProps {
  isModalVisible: boolean;
  handleClose: MouseEventHandler;
}

export default function DeviceDetailsModal({
  handleClose,
  isModalVisible,
}: DeviceDetailsModalProps): ReactElement | null {
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [modalSize, setModalSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    interact('.resize-drag')
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const target = event.target;
            let x = parseFloat(target.getAttribute('data-x')) || modalSize.x;
            let y = parseFloat(target.getAttribute('data-y')) || modalSize.y;
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
            x += event.deltaRect.right;
            y += event.deltaRect.top;
            setModalSize({ x, y });
            console.log(modalSize);
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

    // let resizableModal = interact('.resizable');
    // if (resizableModal !== undefined) {
    //   resizableModal.resizable({
    //     edges: { top: false, left: false, bottom: true, right: true },
    //     listeners: {
    //       move: function (event) {
    //         let { x, y } = event.target.dataset;
    //         x = (parseFloat(x) || 0) + event.deltaRect.right;
    //         y = (parseFloat(y) || 0) + event.deltaRect.top;
    //         Object.assign(event.target.style, {
    //           width: `${event.rect.width}px`,
    //           height: `${event.rect.height}px`,
    //           transform: `translate(${x}px, ${y}px)`,
    //         });
    //         Object.assign(event.target.dataset, { x, y });
    //       },
    //     },
    //   });
    // }

    // let draggableModal = interact('.draggable');
    // if (draggableModal !== undefined) {
    //   draggableModal.draggable({
    //     listeners: {
    //       move(event: DragEvent) {
    //         setModalPosition({ ...modalPosition, x: (modalPosition.x += event.dx) });
    //         setModalPosition({ ...modalPosition, y: (modalPosition.y += event.dy) });
    //         event.target.style.transform = `translate(${modalPosition.x}px, ${modalPosition.y}px)`;
    //       },
    //     },
    //   });
    // }
  }, [modalPosition, modalSize]);

  return isModalVisible ? (
    <div
      className={`${styles.modalContainer} resize-drag`}
      style={{
        transform: `translate(${modalPosition.x}px, ${modalPosition.y}px)`,
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
          <span className={`${styles.modalConnectionStateText} ${styles.textConnected}`}>
            connected
          </span>
          .<span className={`${styles.modalConnectionStateIcon} ${styles.connected}`}></span>
        </p>
      </div>
    </div>
  ) : null;
}
