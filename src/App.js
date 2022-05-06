import styles from "./App.module.scss";
import Nav from "./containers/Nav";
import Header from "./containers/Header";
import CardList from "./containers/CardList";
import data from "./data/recipes";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Nav />
            <CardList recipesData={data} />
        </div>
    );
}

export default App;
