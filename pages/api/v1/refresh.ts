import { Server } from 'socket.io';
import type { Server as HTTPServer } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Socket as NetSocket } from 'net';
import type { Server as IOServer } from 'socket.io';
import {
  createSmartBulb,
  createSmartOutlet,
  createSmartTemperatureSensor,
} from '../../../mockedAPIdata/devicesDetails';
import { socketEvents } from '../../../utils/socketEvents';

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

const SocketHandler = (_req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (res.socket && !res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      let updateInterval: NodeJS.Timeout;

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
