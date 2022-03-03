import { setConnectionState } from './devices';

const maxBrightness = 100;
const maxPowerConsumption = 1000;
const minTemperature = -10;
const maxTemperature = 40;

function isTurnedOn() {
  return Math.random() > 0.75 ? true : false;
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

export const SmartBulb: SmartBulb = {
  type: 'bulb',
  id: '1f711ad4-6d2f-4b4d-8fba-52590dd32c79',
  name: 'Smart Bulb',
  connectionState: setConnectionState(),
  isTurnedOn: isTurnedOn(),
  brightness: setBrightness(),
  color: setRandomHSLColor(),
};

export const SmartOutlet: SmartOutlet = {
  type: 'outlet',
  id: 'c4c48095-b135-401f-ab22-b09b83e37c42',
  name: 'Smart Outlet',
  connectionState: setConnectionState(),
  isTurnedOn: isTurnedOn(),
  powerConsumption: setPowerConsumption(),
};

export const SmartTemperatureSensor: SmartTemperatureSensor = {
  type: 'temperatureSensor',
  id: '9176955d-cf81-483d-846a-35400f3705f7',
  name: 'Smart Temperature Sensor',
  connectionState: setConnectionState(),
  temperature: setTemperature(),
};
