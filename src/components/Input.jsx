import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input text={text} onChange={handleChange} label="First input" />
      <Input text={text} onChange={handleChange} label="Second input" />
    </>
  );
}

function Input({ label, text, handleChange }) {
  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}
