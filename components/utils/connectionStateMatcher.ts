export const connectionStateMatcher = (connectionState: string): string => {
  return connectionState === 'connected'
    ? 'connected successfully'
    : connectionState === 'disconnected'
    ? 'disconnected'
    : 'connection poor';
};
