import useFetch from "../use-fetch";
import { useRef } from "react";

export default function ScrollTopBottom() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  const bottomRef = useRef(null);
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>Scroll to Top and Bottom</h1>
      <h3>Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.key}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>Bottom Section</h3>
    </div>
  );
}
