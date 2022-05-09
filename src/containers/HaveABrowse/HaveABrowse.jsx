import styles from "./HaveABrowse.module.scss";
import SmallCards from "../../components/SmallCards";

const HaveABrowse = ({ recipesData }) => {
  return (
    <div className={styles.HaveABrowse}>
      <h1>HAVE A BROWSE</h1>
      <div className={styles.HaveABrowse__CardsList}>
        {recipesData.slice(0, 2).map((recipe, index) => {
          return (
            <SmallCards
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

export default HaveABrowse;
