import './App.css';
import GameList from './components/Game/GameList';

import Button from './components/UI/Button/Button';
import Cart from './components/UI/Cart/Cart';

function App() {
  

  const addGameHandler = () => {
    console.log("addGameHandler");
  }

  return (
    <div className="App">
      <Cart>
        <Button onClick={addGameHandler}>Add game</Button>
      </Cart>
      <Cart>
        <GameList games={DUMMY_GAMES} />
      </Cart>

    </div>
  );
}

export default App;

const DUMMY_GAMES = [
  {
    title: "Каркассон",
    players: [
      {
        name: "Ленар",
        count: 1,
        img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256"
      },
      {
        name: "Николай",
        count: 2,
        img: "https://habrastorage.org/webt/5a/ba/4c/5aba4c6245e9e423325125.jpeg"
      },
    ]
  },
  {
    title: "Опал",
    players: [
      {
        name: "Ленар",
        count: 3,
        img: "https://www.gravatar.com/avatar/615553a2d9d4ed6616efed5b68e83fe2?d=wavatar&s=256"
      },
      {
        name: "Николай",
        count: 1,
        img: "https://habrastorage.org/webt/5a/ba/4c/5aba4c6245e9e423325125.jpeg"
      },
    ]
  },
]