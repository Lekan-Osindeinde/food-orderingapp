import { useState } from "react";
import styles from "../styles/Features.module.css";

const Features = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/features1.jpg",
    "/img/features1.jpg",
    "/img/features1.jpg",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <img src="/img/arrowl.png" layout="fill" alt="" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, index) => (
          <div className={styles.imgContainer} key={index}>
            <img src={img} layout="fill" alt="" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0, display: "grid", justifyContent: "right" }}
        onClick={() => handleArrow("r")}
      >
        <img src="/img/arrowr.png" layout="fill" alt="" />
      </div>
    </div>
  );
};

export default Features;
