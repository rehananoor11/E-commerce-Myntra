import { useSelector } from "react-redux";
const BagSummary = () => {
  const bag = useSelector((state) => state.bag);
  const item = useSelector((state) => state.items);
  let totalItem = bag.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  bag.forEach((bagItem) => {
    let itemDetail = item.find((item) => item.id === bagItem);
    totalMRP += itemDetail.original_price;
    totalDiscount += itemDetail.original_price - itemDetail.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + 99;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
