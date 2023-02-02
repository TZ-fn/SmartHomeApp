import { NextApiRequest, NextApiResponse } from 'next/types';
import { createDevices } from '../../../mockedAPIdata/devices';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(createDevices());
}
