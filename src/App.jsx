import Accordian from "./components/accordian/Accordian";
import TabTest from "./components/custom-tabs/tab-test";
import Tabs from "./components/custom-tabs/tabs";
import GitProfile from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import ModalTest from "./components/modal/modal-test";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color/RandomColor";
import ScrollIndicator from "./components/scroll-indicator";
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
      {/* <QRCodeGenerator /> */}

      {/* Light-Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll View */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Tabs */}
      {/* <TabTest /> */}

      {/* Modal */}
      {/* <ModalTest /> */}

      {/* Git Profile */}
      <GitProfile />
    </div>
  );
}

export default App;
