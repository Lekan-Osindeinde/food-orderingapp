import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Extras</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <img src="/img/pizza.png" alt="" />
              </div>
            </td>
            <td>
              <span className={styles.name}>GONALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>39.80</span>
            </td>
          </tr>
          <tr className={styles.trTitle}>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Extras</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <img src="/img/pizza.png" alt="" />
              </div>
            </td>
            <td>
              <span className={styles.name}>PEPPERONI</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$18.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>37.80</span>
            </td>
          </tr>
          <tr className={styles.trTitle}>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Extras</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <img src="/img/pizza.png" alt="" />
              </div>
            </td>
            <td>
              <span className={styles.name}>CHICKENPIZZA</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$21.90</span>
            </td>
            <td>
              <span className={styles.quantity}>1</span>
            </td>
            <td>
              <span className={styles.total}>21.90</span>
            </td>
          </tr>
          <tr className={styles.trTitle}>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Extras</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <img src="/img/pizza.png" alt="" />
              </div>
            </td>
            <td>
              <span className={styles.name}>MUSHROOMPIZZA</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$25.90</span>
            </td>
            <td>
              <span className={styles.quantity}>1</span>
            </td>
            <td>
              <span className={styles.total}>25.90</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal</b>$125.40
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total</b>$125.4
          </div>
          <button
            className={styles.button}
            onClick={() => {
              navigate("/order");
            }}
          >
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
