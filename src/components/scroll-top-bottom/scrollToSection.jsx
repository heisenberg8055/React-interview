import { useRef } from "react";

export default function ScrollToSection() {
  function handleScrollToSection() {
    let position = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
  const ref = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "black",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "violet",
      },
    },
  ];
  return (
    <div>
      <h1>Scroll To a Particular Section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((item, index) => (
        <div ref={index === 0 ? ref : null} style={item.style} key={item.label}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}
