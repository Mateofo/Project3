// const styles = {
//   card: {
//     margin: 20,
//     background: '#6E6E6E',
//     padding: '10px',
//     color: '#BAFF39',
//   },
//   position: {
//     margin: '50px',
//     width: '90%',
//     background: '#BAFF39',
//     padding: '10px',
//     display: 'block',
//     color: '#6E6E6E',
//   },
//   image: {
//     margin: '20px',
//     width: '95%',
//     display: 'block',
//   }
// };

// export default function CutFood() {
//   return (
//     <div>
//       <h1 style={styles.card} >CutFood</h1>
//       <figure style={styles.position}>
//         <h1>Torta</h1>
//           <img style={styles.image} src={Torta} alt="Logo" />
//       </figure>
//     </div>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
