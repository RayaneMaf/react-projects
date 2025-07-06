import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import "./App.css";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      <Accordian />
      <hr />
      <RandomColor />
      <hr />
      <StarRating numberOfStarts={5}/>
    </div>
  );
}

export default App;
