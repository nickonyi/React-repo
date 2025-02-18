import './styles/App.css';
import { useState } from 'react';

const colors = ['pink', 'green', 'maroon', 'blue', 'yellow', 'purple', 'red'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          className={backgroundColor === color ? 'selected' : ''}
          onClick={onButtonClick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
