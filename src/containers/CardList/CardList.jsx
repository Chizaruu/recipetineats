import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ recipesData }) => {
    return (
        <div className={styles.CardList}>
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

export default CardList;
