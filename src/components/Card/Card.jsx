import styles from "./Card.module.scss";

const Card = ({
    image = "https://www.recipetineats.com/wp-content/uploads/2017/01/Chicken-Shawarma-Wrap_3.jpg?resize=317,317",
    category = "defaultcategory",
    recipeName = "defaultname",
    description = "This is a description",
}) => {
    return (
        <div className={styles.Card}>
            <div>
                <img className={styles.Card_Image} src={image} alt="?" />
            </div>
            <div>
                <h5 className={styles.Card_Category}>{category}</h5>
                <h2 className={styles.Card_Name}>{recipeName}</h2>

                <p className={styles.Card_Desc}>{description}</p>
                <button className={styles.Card_Button}>Get the recipe ></button>
            </div>
        </div>
    );
};

export default Card;
