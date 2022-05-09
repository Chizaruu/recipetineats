import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <div className={styles.Subscribe}>
      <div className={styles.Subscribe__container}>
        <h1>Free Recipe eBooks</h1>
        <div className={styles.Subscribe__divide}>
          <div className={styles.Subscribe__signupSection}>
            <p>Join my free email list to receive THREE free cookbooks!</p>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Email address" />
            <a href=" ">SIGN UP!</a>
          </div>
          <div>Image goes here</div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
