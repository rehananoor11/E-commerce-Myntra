import HomeItem from "../components/HomeItem";
import * as redux from "react-redux";
const Home = () => {
  const items = redux.useSelector((state) => state.items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((items) => (
            <HomeItem item={items} key={items.id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
