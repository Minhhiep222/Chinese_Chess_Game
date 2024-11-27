import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <h1>Chơi cờ tướng</h1>
      <div className="container">
        <Board />
      </div>
    </div>
  );
}

export default App;
