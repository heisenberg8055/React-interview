import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      {/* < ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}

      {/* Load More Products */}
      {/* <LoadMoreData /> */}

      {/* Tree View */}
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Genearator */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
