export const socketEvents = {
  connection: 'connection',

  refresh: {
    SmartBulb: 'refresh-SmartBulb',
    SmartOutlet: 'refresh-SmartOutlet',
    SmartTemperatureSensor: 'refresh-SmartTemperatureSensor',
  },

  update: {
    SmartBulb: 'update-SmartBulb',
    SmartOutlet: 'update-SmartOutlet',
    SmartTemperatureSensor: 'update-SmartTemperatureSensor',
  },

  stopRefreshing: 'stop-refreshing',
};
