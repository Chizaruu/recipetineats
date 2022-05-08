import styles from "./SmallCards.module.scss";

const SmallCards = ({ image, recipeName }) => {
  return (
    <div className={styles.SmallCards}>
      <img src={image} alt="" />
      <h3>{recipeName}</h3>
    </div>
  );
};

export default SmallCards;
