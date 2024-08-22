import { useState } from "react";
import styles from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ stars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="styles.star-rating">
      {[...Array(stars)].map((_, i) => {
        let index = i + 1;
        return (
          <FaStar
            key={i}
            className={index <= (hover || rating) ? styles.active : styles.inactive}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={stars * 10}
          />
        );
      })}
    </div>
  );
}
