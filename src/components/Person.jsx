import { useState } from 'react';

export function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  const handleIncreaseAge = () => {
    console.log('in handleIncreaseAge (before setPerson call): ', person);
    setPerson({ ...person, age: person.age + 1 });
    console.log('in handleIncreaseAge (after setPerson call): ', person);
  };
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase aage</button>
    </>
  );
}
