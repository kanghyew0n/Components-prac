import "./App.css";
import Chat from "./components/Chat";
import Textfield from "./components/Textfield";

function App() {
  return (
    <div className="App">
      <Textfield type={"outlined"} text={"outlined"} />
      <Textfield type={"standard"} text={"standard"} />
      <Textfield type={"filled"} text={"filled"} />
      <Chat />
    </div>
  );
}

export default App;
