import { useEffect } from 'react';
import { createConnection } from '../data/chat';

const serverUrl = 'https://localhost:1234';
export default function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);
  return <h1>Welcome to the {roomId} room!</h1>;
}
