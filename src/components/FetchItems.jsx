import * as redux from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemSlice.js";
import { statusActions } from "../store/fetchStatusSlice.js";
const FetchItems = () => {
  const fetchStatus = redux.useSelector((store) => store.fetchStatus);
  const dispatch = redux.useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(statusActions.markFetchingstarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(statusActions.markFetchDone());
        dispatch(statusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(data.items));
      })
      .finally(() => {
        controller.abort();
      });
  }, [fetchStatus]);

  return (
    <>
      {fetchStatus.fetchDone}
      {fetchStatus.fetching}
    </>
  );
};

export default FetchItems;
