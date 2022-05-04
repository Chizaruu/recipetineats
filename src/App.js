import logo from "./logo.svg";
import "./App.css";
import Card from "./components/CardSecondSection/Card";
import CardListSecondSection from "./containers/CardListSecondSection";
import data from "./data/recipes";

function App() {
    return (
        <div className="App">
            <CardListSecondSection recipesData={data} />
        </div>
    );
}

export default App;
