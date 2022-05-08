import styles from "./Collections.module.scss";
import SmallCard from "../../components/SmallCards";

const Collections = ({ recipesData }) => {
  return (
    <div className={styles.Collections}>
      <div className={styles.Collections__divider}>
        <h1>COLLECTIONS</h1>
        <a href=" ">BROWSE ALL COLLECTIONS {">"}</a>
      </div>
      <div className={styles.Collections__grid}>
        {recipesData.slice(0, 4).map((recipe, index) => {
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
  );
};

export default Collections;
