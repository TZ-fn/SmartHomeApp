export function setConnectionStatusColor(connectionState: string) {
  return connectionState === 'connected'
    ? 'textConnected'
    : connectionState === 'disconnected'
    ? 'textDisconnected'
    : 'textPoorConnection';
}
