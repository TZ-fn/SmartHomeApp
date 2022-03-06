import { setConnectionState } from './devices';

const maxBrightness = 100;
const maxPowerConsumption = 1000;
const minTemperature = -10;
const maxTemperature = 40;

function isTurnedOn() {
  return Math.random() < 0.75 ? true : false;
}

function setBrightness() {
  return Math.floor(Math.random() * maxBrightness);
}

function setPowerConsumption() {
  return Math.floor(Math.random() * maxPowerConsumption);
}

function setTemperature() {
  return Math.floor(Math.random() * (maxTemperature - minTemperature) + minTemperature);
}

function setRandomHSLColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

interface SmartBulb {
  type: 'bulb';
  id: string;
  name: string;
  connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
  isTurnedOn: boolean;
  brightness: number; // <0, 100>
  color: string; // in the CSS formats
}

interface SmartOutlet {
  type: 'outlet';
  id: string;
  name: string;
  connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
  isTurnedOn: boolean;
  powerConsumption: number; // in watts
}

interface SmartTemperatureSensor {
  type: 'temperatureSensor';
  id: string;
  name: string;
  connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
  temperature: number; // in Celsius
}

export type SmartDeviceDetails = SmartBulb | SmartOutlet | SmartTemperatureSensor;

export const createSmartBulb = (): SmartBulb => {
  return {
    type: 'bulb',
    id: '1f711ad4-6d2f',
    name: 'Smart Bulb',
    connectionState: setConnectionState(),
    isTurnedOn: isTurnedOn(),
    brightness: setBrightness(),
    color: setRandomHSLColor(),
  };
};

export const createSmartOutlet = (): SmartOutlet => {
  return {
    type: 'outlet',
    id: 'c4c48095-b135',
    name: 'Smart Outlet',
    connectionState: setConnectionState(),
    isTurnedOn: isTurnedOn(),
    powerConsumption: setPowerConsumption(),
  };
};

export const createSmartTemperatureSensor = (): SmartTemperatureSensor => {
  return {
    type: 'temperatureSensor',
    id: '9176955d-cf81',
    name: 'Smart Temperature Sensor',
    connectionState: setConnectionState(),
    temperature: setTemperature(),
  };
};
