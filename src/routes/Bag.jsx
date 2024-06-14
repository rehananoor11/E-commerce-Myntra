import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
export default function Bag() {
  const bag = useSelector((state) => state.bag);
  const item = useSelector((state) => state.items);
  const items = item.filter((item) => bag.includes(item.id));
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {items.length === 0 && <h1>No items in bag</h1>}
          {items.length > 0 &&
            items.map((item) => <BagItem key={item.id} item={item} />)}
        </div>
        <BagSummary />
      </div>
    </main>
  );
}
