import styles from "./App.module.scss";
import Nav from "./containers/Nav";
import Header from "./containers/Header";
import CardList from "./containers/CardList";
import data from "./data/recipes";
import Section from "./containers/Section";
import HaveABrowse from "./containers/HaveABrowse";
import ChickenRecipes from "./containers/ChickenRecipes";
import Subscribe from "./containers/Subscribe";
import Collections from "./containers/Collections";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Nav />
      <CardList recipesData={data} />
      <Section recipesData={data} />
      <HaveABrowse recipesData={data} />
      <ChickenRecipes recipesData={data} />
      <Subscribe />
      <Collections recipesData={data} />
    </div>
  );
}

export default App;
