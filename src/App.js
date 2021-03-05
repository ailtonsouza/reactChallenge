import style from "./App.module.css";
import FilterBar from "./Components/FilterBar";
import ShopPage from "./Pages/ShopPage";
import MenuBar from "./Components/MenuBar";

function App() {
  return (
    <div className={style.main}>
      <MenuBar />
      <div className={style.userInteraction}>
        <FilterBar />
        <ShopPage />
      </div>
    </div>
  );
}

export default App;
