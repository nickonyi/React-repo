import './App.css';

function Item({ name, isPacked }) {
  return (
    <li className="item">{isPacked ? <del>{name + ' ✅'}</del> : name}</li>
  );
}

function App() {
  return (
    <section>
      <h1>Sally ride Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
        <Item isPacked={false} name="Photo of Randioton" />
      </ul>
    </section>
  );
}

export default App;
