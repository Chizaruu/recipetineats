import styles from "./App.module.scss";
import Nav from "./container/first-section/Nav";
import Header from "./container/first-section/Header";
import CardListSecondSection from "./containers/CardListSecondSection";
import data from "./data/recipes";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Nav />
            <CardListSecondSection recipesData={data} />
        </div>
    );
}

export default App;
