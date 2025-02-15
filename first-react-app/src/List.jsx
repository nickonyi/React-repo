import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter((person) => person.profession === 'chemist');
  const everyoneElse = people.filter(
    (person) => person.profession !== 'chemist'
  );

  console.log(chemists);
  console.log(everyoneElse);

  const chemistGroup = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  const everyoneElseGroup = everyoneElse.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistGroup}</ul>
      <h1>Everyone else</h1>
      <ul>{everyoneElseGroup}</ul>
    </article>
  );
}
