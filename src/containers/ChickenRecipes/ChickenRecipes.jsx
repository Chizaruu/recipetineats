import styles from "./ChickenRecipes.module.scss";
import Button from "../../components/Button";
import SmallCard from "../../components/SmallCards";

const ChickenRecipes = ({ recipesData }) => {
  return (
    <div className={styles.ChickenRecipes}>
      <div className={styles.ChickenRecipes__container}>
        <div className={styles.ChickenRecipes__topSection}>
          <h1>CHICKEN RECIPES</h1>
          <Button />
        </div>
        <div className={styles.ChickenRecipes__list}>
          {recipesData.slice(0, 6).map((recipe, index) => {
            return (
              <SmallCard
                image={recipe.image}
                recipeName={recipe.recipeName}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChickenRecipes;
