import React from 'react';
import { useCart } from '../../contexts/Cart';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, clearCart } from '../../Store/slices/cartSlice'
import './Cart.css'
function Cart() {
  // const { cartItems, removeFromCart, clearCart, addToCart } = useCart();

  const cartItems = useSelector((state) => state.cart.cartItems)
const dispatch = useDispatch()
  const filteredItems = cartItems.filter(item => item && item.count >= 1);
console.log(cartItems);

  return (
    <div className="container mt-5">
 
      <div className='d-flex justify-content-between align-items-center my-4'>
 <h2>Your Cart</h2>
           <button className="btn btn-danger "
                               onClick={() => dispatch(clearCart())}

>            Clear Cart
          </button>
      </div>
     

      {filteredItems.length === 0 ? (
        <div className="AlertCart">
   <div className="alert alert-info text-center " >Your cart is empty.</div>
        </div>
     
      ) : (
        <div>
          {filteredItems.map((item) => (
            <div key={item.id ?? crypto.randomUUID()} className="card mb-3 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3 align-items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    className="rounded"
                  />
                  <div>
                    <h5>{item.title}</h5>
                    <p>${item.price}</p>
                    <p className="text-muted">
                      Total: ${item.price * item.count}
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>dispatch(removeFromCart(item.id))}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

       
        </div>
      )}
    </div>
  );
}

export default Cart;
