import { createConnection } from '../data/chat';

const serverUrl = 'https://localhost:1234';
export default function ChatRoom({ roomId }) {
  return <h1>Welcome to the {roomId} room!</h1>;
}
