import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID THE YUMMY PIZZA, WELL BBAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Hundisburger Strasse #304.
            <br /> Magdeburg, 39124
            <br /> (405) 891-2020
          </p>
          <p className={styles.text}>
            Alter Markt Strasse #304.
            <br /> Magdeburg, 39174
            <br /> (405) 891-2020
          </p>
          <p className={styles.text}>
            Leipziger Strasse #304.
            <br /> Magdeburg, 39224
            <br /> (405) 891-2020
          </p>
          <p className={styles.text}>
            Operhaus Strasse #304.
            <br /> Magdeburg, 39424
            <br /> (405) 891-2020
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
