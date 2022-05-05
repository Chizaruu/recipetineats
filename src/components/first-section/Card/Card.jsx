import styles from "./Card.module.scss";

const Card = ({ title = "No title", desc = "No description" }) => {
    return (
        <div className={styles.Card}>
            <h3 className={styles.Card__Title}>{title}</h3>
            <p className={styles.Card__Desc}>{desc}</p>
        </div>
    );
};

export default Card;
