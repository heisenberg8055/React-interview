import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <div>
      {/* Accordian Component*/}
      {/* <Accordian /> */}

      {/* Random Color Component*/}
      {/* <RandomColor /> */}

      {/* { Star Rating} */}
      {/* <StarRating stars={10}/> */}

      {/* {Image Slider} */}
      < ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
    </div>
  );
}

export default App;
