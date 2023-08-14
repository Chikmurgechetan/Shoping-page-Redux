import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { showCartActions } from "./Store/ShowcartReducer";
import Notification from "./components/UI/Notification";

  
let isIntial = true; 

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.show.cartVisability);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.show.notification);
  
  
  useEffect(() => {
    const sendData = async () => {
      dispatch(
        showCartActions.setNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(
        "https://reduxcart-26fda-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed..");
      }

      dispatch(
        showCartActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isIntial){
      isIntial = false;
      return;
    }

    sendData().catch((error) => {
      dispatch(
        showCartActions.setNotification({
          status: "error",
          title: "Error..",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
