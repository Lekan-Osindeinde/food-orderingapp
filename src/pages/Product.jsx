import { useState } from "react";
import styles from "../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Try our professionally designed pizza menu templates. They make selling pizas easy with ready made columns for build your own pizzas, or areas to list specialty pizzas",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={pizza.img} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <img src="/img/size.png" alt="" width="30px" height="30px" />
            <span className={styles.label}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <img src="/img/size.png" alt="" width="40px" height="40px" />
            <span className={styles.label}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <img src="/img/size.png" alt="" width="50px" height="50px" />
            <span className={styles.label}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingridients</h3>
        <div className={styles.ingredient}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingridients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extral Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
