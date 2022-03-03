import { v4 as uuidv4 } from 'uuid';

function setConnectionState() {
  let randomSeed = Math.random();
  if (randomSeed < 0.05) {
    return 'disconnected';
  }
  if (randomSeed < 0.1) {
    return 'poorConnection';
  }
  return 'connected';
}

export type SmartDeviceType = 'bulb' | 'outlet' | 'temperatureSensor';

export type ConnectionStateType = 'connected' | 'disconnected' | 'poorConnection';

export interface SmartDevice {
  type: SmartDeviceType;
  id: string;
  name: string;
  connectionState: ConnectionStateType;
}

export const devices: SmartDevice[] = [
  {
    type: 'bulb',
    id: uuidv4(),
    name: 'Smart Bulb',
    connectionState: setConnectionState(),
  },
  {
    type: 'outlet',
    id: uuidv4(),
    name: 'Smart Outlet',
    connectionState: setConnectionState(),
  },
  {
    type: 'temperatureSensor',
    id: uuidv4(),
    name: 'Smart Temperature Sensor',
    connectionState: setConnectionState(),
  },
];
