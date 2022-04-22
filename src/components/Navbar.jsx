import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
          <Router>
            <Link to="/">
              <li className={styles.listItem}>Homepage</li>
            </Link>
            <Link to="/pizzalist">
              <li className={styles.listItem}>Product</li>
            </Link>
            <Link to="/product">
              <li className={styles.listItem}>Menu</li>
            </Link>
            <img src="/img/logo.png" alt="" width="50px" height="50px" />
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>

            <li className={styles.listItem}>Contact</li>
          </Router>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Router>
            <Link to="/cart">
              <img
                src="/img/cart.png"
                alt=""
                width="30px"
                height="30px"
                className={styles.imgCart}
              />
            </Link>
          </Router>
          <div className={styles.counter}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
