import styles from "./CakeDisplay.module.css";

const CakeDisplay = ({ flavor, description }) => {
  return (
    <div className={styles.cake_bx}>
      <div className={styles.cake_by}>
        <h4>{flavor}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CakeDisplay;
