import { createDevices } from '../mockedAPIdata/devices';
import { createSmartOutlet } from '../mockedAPIdata/devicesDetails';

export function mockedFetch(request: string) {
  if (request === '/api/v1/devices') {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve(createDevices()),
    } as Response);
  }
  if (request === '/api/v1/devices/c4c48095-b135') {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve(createSmartOutlet()),
    } as Response);
  }
}
