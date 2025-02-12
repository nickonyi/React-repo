import './App.css';

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animalsList.map((animal) => {
        return animal.startsWith('L') ? (
          <ListItem key={animal} animal={animal} />
        ) : null;
      })}
    </ul>
  );
}

function App() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard', 'Leopard'];

  return (
    <>
      <h1>Animals:</h1>
      <List animalsList={animals} />
    </>
  );
}

export default App;
