import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { showCartActions } from "../../Store/ShowcartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const cartShowHandler = () => {
    dispatch(showCartActions.cartShow());
  };

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
