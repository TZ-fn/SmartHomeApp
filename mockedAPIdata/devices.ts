export function setConnectionState() {
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

export function createDevices(): SmartDevice[] {
  return [
    {
      type: 'bulb',
      id: '1f711ad4-6d2f',
      name: 'Smart Bulb',
      connectionState: setConnectionState(),
    },
    {
      type: 'outlet',
      id: 'c4c48095-b135',
      name: 'Smart Outlet',
      connectionState: setConnectionState(),
    },
    {
      type: 'temperatureSensor',
      id: '9176955d-cf81',
      name: 'Smart Temperature Sensor',
      connectionState: setConnectionState(),
    },
  ];
}
