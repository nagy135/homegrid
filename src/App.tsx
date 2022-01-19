import logo from './logo.svg';
import './App.css';

import { TIndexes, TItemDefinition } from './App.d';

const items: TItemDefinition = [
  {
    name: "Reddit",
    color: "red",
    icon: "Reddit",
    url: "https://www.reddit.com",
  },
  {
    name: "Facebook",
    color: "blue",
    icon: "Facebook",
    url: "https://www.facebook.com",
  },
];

const indexes: TIndexes = [
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
  [0,0,0,0,0,1,1,1,1,1],
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
