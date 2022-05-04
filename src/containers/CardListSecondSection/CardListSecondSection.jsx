import Card from "../../components/CardSecondSection/Card";
import styles from "./CardListSecondSection.module.scss";

const CardListSecondSection = ({ recipesData }) => {
    return (
        <div className={styles.CardListSecondSection}>
            {recipesData.map((recipe, index) => {
                return (
                    <Card
                        image={recipe.image}
                        category={recipe.category}
                        recipeName={recipe.recipeName}
                        description={recipe.description}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default CardListSecondSection;

/* <div className={styles.Card}>
    <img className={styles.Card_Image} src={image} />
    <h5 className={styles.Card_Category}>{category}</h5>
    <h2 className={styles.Card_Name}>{recipeName}</h2>
    <p className={styles.Card_Desc}>{description}</p>
    <button>Get the recipe ></button>
</div>; */
