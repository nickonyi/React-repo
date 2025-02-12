import './App.css';

function List(props) {
  return (
    <ul>
      {props.animalsList.map((animal) => {
        return animal.startsWith('L') && <li key={animal}>{animal}</li>;
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
