import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function MenuItem({ item }) {
  const [disp, setDisp] = useState({});

  function handleToggleChildren(label) {
    setDisp({
      ...disp,
      [label]: !disp[label],
    });
  }

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {disp[item.label] ? <FaMinus color="#000" size={25}/> : <FaPlus color="#fff" size={25}/>}
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length && disp[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
