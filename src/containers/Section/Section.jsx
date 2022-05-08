import styles from "./Section.module.scss";
import SmallCard from "../../components/SmallCards";

const Section = ({ recipesData }) => {
  return (
    <div className={styles.Section}>
      <h1>LIFE ESSENTIALS</h1>
      <div className={styles.Section__SmallCardsList}>
        {recipesData.slice(0, 3).map((recipe, index) => {
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

export default Section;
