import Accordian from "./components/accordian/Accordian";
import UseOnClickOutsideTest from "./components/click-outside/test";
import TabTest from "./components/custom-tabs/tab-test";
import Tabs from "./components/custom-tabs/tabs";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GitProfile from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import ModalTest from "./components/modal/modal-test";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color/RandomColor";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollTopBottom from "./components/scroll-top-bottom";
import ScrollToSection from "./components/scroll-top-bottom/scrollToSection";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating/StarRating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseWindowResizeTest from "./components/window-resize/test";

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
      {/* <GitProfile /> */}

      {/* Search AutoComplete */}
      {/* <SearchAutoComplete /> */}

      {/* Tic-Tac-Toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flags */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* Use Custom Hook */}
      {/* <UseFetchHookTest /> */}

      {/* OnClick OutSide Hook Test */}
      {/* <UseOnClickOutsideTest /> */}

      {/* Custom Hook Window Size */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll Top Bottom */}
      {/* <ScrollTopBottom /> */}

      {/* Scroll To Section */}
      {/* <ScrollToSection /> */}

      {/* Weather */}
      <Weather />
    </div>
  );
}

export default App;
