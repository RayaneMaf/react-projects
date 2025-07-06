import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      <Accordian />
      <hr />
      <RandomColor />
      <hr />
      <StarRating numberOfStarts={5} />
      <hr />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <hr />
    </div>
  );
}

export default App;
