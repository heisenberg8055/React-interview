import { useContext } from "react";
import Accordian from "../accordian/Accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color/RandomColor";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const {loading, enableFlags} = useContext(FeatureFlagsContext);
    

  function checkEnabledFlags(getCurrentKey){
    return enableFlags[getCurrentKey];
  }
  const componentsToRender = [
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
  ];

  if(loading) return <h1>Loading Data</h1>
  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map((item) => checkEnabledFlags(item.key) ? item.component : null)
      }
    </div>
  );
}
