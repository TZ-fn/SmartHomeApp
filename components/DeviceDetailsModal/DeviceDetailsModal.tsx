import { ReactElement, useEffect, useState } from 'react';
import interact from 'interactjs';
import styles from './DeviceDetailsModal.module.scss';

export default function DeviceDetailsModal(): ReactElement {
  const [position, setPosition] = useState({ x: 150, y: 100 });

  useEffect(() => {
    let draggableModal = interact('.draggable');
    if (draggableModal !== undefined) {
      draggableModal.draggable({
        listeners: {
          move(event) {
            setPosition({ ...position, x: (position.x += event.dx) });
            setPosition({ ...position, y: (position.y += event.dy) });
            event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
          },
        },
      });
    }
  }, []);

  return (
    <div className={`${styles.modalContainer} draggable`}>
      <div className={styles.modal}></div>
    </div>
  );
}
