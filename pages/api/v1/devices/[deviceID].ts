import { NextApiRequest, NextApiResponse } from 'next/types';
import {
  createSmartBulb,
  createSmartOutlet,
  createSmartTemperatureSensor,
} from '../../../../mockedAPIdata/devicesDetails';

export default function SmartDeviceDetails(req: NextApiRequest, res: NextApiResponse) {
  const allDevicesDetails = [
    createSmartBulb(),
    createSmartOutlet(),
    createSmartTemperatureSensor(),
  ];
  const IDquery = req.query.deviceID;

  const filteredDevice = allDevicesDetails.find((device) => device.id === IDquery);

  res.status(200).json(filteredDevice);
}
