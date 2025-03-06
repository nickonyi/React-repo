import { useState } from 'react';
import ChatRoom from './ChatRoom';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from '../data/chat';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isEncypted, setIsencrypted] = useState(false);

  return (
    <>
      <label>
        Choose the ChatRoom:{'  '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncypted}
          onChange={(e) => setIsencrypted(e.target.value)}
        />
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        createConnection={
          isEncypted ? createEncryptedConnection : createUnencryptedConnection
        }
      />
    </>
  );
}
