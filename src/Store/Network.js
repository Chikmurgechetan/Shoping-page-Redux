import { showCartActions } from "./ShowcartReducer";
import { cartAction } from "./CartReducer";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reduxcart-26fda-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not featch cart data");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      dispatch(
        showCartActions.setNotification({
          status: "error",
          title: "Error..",
          message: "Fetching data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showCartActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reduxcart-26fda-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed..");
      }
    };
    try {
      await sendRequest();

      dispatch(
        showCartActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showCartActions.setNotification({
          status: "error",
          title: "Error..",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
