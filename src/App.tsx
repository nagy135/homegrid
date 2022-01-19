import Board from './components/board';
import { indexes, items } from './state';

const App = () => {

  return (
    <Board
      items={items}
      indexes={indexes}
    />
  );
}

export default App;
