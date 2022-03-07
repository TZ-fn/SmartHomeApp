export const socketEvents = {
  connection: 'connection',

  refresh: {
    SmartBulb: 'refresh-SmartBulb',
    SmartOutlet: 'refresh-SmartOutlet',
    SmartTemperatureSensor: 'refresh-SmartTemperatureSensor',
  },

  devices: {
    '1f711ad4-6d2f': 'SmartBulb',
    'c4c48095-b135': 'SmartOutlet',
    '9176955d-cf81': 'SmartTemperatureSensor',
  },

  updateDevice: 'update-device',

  stopRefreshing: 'stop-refreshing',
};
