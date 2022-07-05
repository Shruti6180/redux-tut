import logo from "./logo.svg";
import "./App.css";
import User from "./Components/User";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  return (
    <div className="App">
      {/* <User data={{ name: "Shruti", age: 28 }} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
