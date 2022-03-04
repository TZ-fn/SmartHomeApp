import { createDevices } from '../../../mockedAPIdata/devices';

export default function handler(req, res) {
  res.status(200).json(createDevices());
}
