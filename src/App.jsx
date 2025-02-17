import './styles/App.css';

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px',
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

function App() {
  return (
    <div>
      <Button text="click me!" color="red" fontSize={12} />
      <Button text="do not click me!" color="blue" fontSize={20} />
      <Button text="click me!" color="red" fontSize={12} />
    </div>
  );
}

export default App;
