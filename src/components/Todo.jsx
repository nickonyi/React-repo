export default function TodoList() {
  const person = {
    name: 'Gregorio y Zara',
    src: 'https://i.imgur.com/7vQD0fPs.jpg',
    theme: {
      backgroundColor: 'black',
      color: 'pink',
    },
  };

  return (
    <div style={person.theme}>
      <h1> {person.name} To do list</h1>
      <img src={person.src} alt={person.name} className="avatar" />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fueldled engine</li>
      </ul>
    </div>
  );
}
