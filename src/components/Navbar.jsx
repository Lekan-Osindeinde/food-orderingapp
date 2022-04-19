import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.phone}>
          <img src="/img/telephone.png" alt="" className={styles.img} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0163367675454</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <img src="/img/logo.png" alt="" width="50px" height="50px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>

          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <img
            src="/img/cart.png"
            alt=""
            width="30px"
            height="30px"
            className={styles.imgCart}
          />
          <div className={styles.counter}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
