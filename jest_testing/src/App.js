import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome";
import Data from "./component/Data";

function App() {
  return (
    <div className="App">
      <Welcome />
      <p>Learn React</p>
      <Data />
      //we have to test data 
    </div>
  );
}

export default App;
