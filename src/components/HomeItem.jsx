/* eslint-disable react/prop-types */
import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const isItemInBag = bagItems.includes(item.id);
  return (
    <>
      <div className="item-container">
        <div className="item-dev-image">
          <img className="item-image" src={item.image} alt="item image" />
        </div>
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        {!isItemInBag ? (
          <button
            className="btn-add-bag btn btn-success"
            onClick={() => {
              dispatch(bagActions.addToBag(item.id));
            }}
          >
            Add to Bag
          </button>
        ) : (
          <button
            className="btn btn-danger btn-add-bag"
            onClick={() => {
              dispatch(bagActions.removeFromBag(item.id));
            }}
          >
            Remove
          </button>
        )}
      </div>
      `
    </>
  );
};

export default HomeItem;
