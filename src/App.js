import styles from "./App.module.scss";
import Nav from "./container/first-section/Nav";
import Header from "./container/first-section/Header";
function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Nav />
        </div>
    );
}

export default App;
