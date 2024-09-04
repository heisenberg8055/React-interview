import { useState, useRef } from "react";
import useOutSideClick from ".";

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Modal</h1>
          <p>Click Outside</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Modal</button>
      )}
    </div>
  );
}
