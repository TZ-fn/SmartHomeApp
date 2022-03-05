import {
  createSmartBulb,
  createSmartOutlet,
  createSmartTemperatureSensor,
} from '../../../../mockedAPIdata/devicesDetails';

export default function SmartDeviceDetails(req, res) {
  const allDevicesDetails = [
    createSmartBulb(),
    createSmartOutlet(),
    createSmartTemperatureSensor(),
  ];
  const IDquery = req.query.deviceID;

  const filteredDevices = allDevicesDetails.filter((device) => device.id === IDquery);

  res.status(200).json(...filteredDevices);
}
