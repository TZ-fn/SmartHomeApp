export const connectionStateMatcher = (connectionState: string): string => {
  return connectionState === 'connected'
    ? 'Connected successfully.'
    : connectionState === 'disconnected'
    ? 'Disconnected.'
    : 'Connection poor.';
};
