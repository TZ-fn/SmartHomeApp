import { Server } from 'Socket.IO';
import {
  createSmartBulb,
  createSmartOutlet,
  createSmartTemperatureSensor,
} from '../../../mockedAPIdata/devicesDetails';
import { socketEvents } from '../../../utils/socketEvents';

const SocketHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      let updateInterval;

      socket.on(socketEvents.stopRefreshing, () => {
        clearInterval(updateInterval);
      });

      socket.on(socketEvents.id.SmartBulb, () => {
        updateInterval = setInterval(() => {
          socket.emit(socketEvents.updateDevice, createSmartBulb());
        }, 3000);
      });

      socket.on(socketEvents.id.SmartOutlet, () => {
        updateInterval = setInterval(() => {
          socket.emit(socketEvents.updateDevice, createSmartOutlet());
        }, 3000);
      });

      socket.on(socketEvents.id.SmartTemperatureSensor, () => {
        updateInterval = setInterval(() => {
          socket.emit(socketEvents.updateDevice, createSmartTemperatureSensor());
        }, 3000);
      });
    });
  }
  res.end();
};

export default SocketHandler;
