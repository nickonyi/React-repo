import { useEffect } from 'react';

const serverUrl = 'https://localhost:1234';
export default function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId, createConnection]);
  return <h1>Welcome to the {roomId} room!</h1>;
}
