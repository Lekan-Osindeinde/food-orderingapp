import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <img src="/img/pizza.png" alt="" width="250" height="250" />
      <h1 className={styles.title}>CHICKEN PIZZA</h1>
      <span className={styles.price}>$19.99</span>
      <p className={styles.desc}>
        Try our professionally-designed pizza menu templates.
      </p>
    </div>
  );
};

export default PizzaCard;
