// import React, { useContext } from "react";
// import "./CartItems.css";
// import cross_icon from "../Assets/cart_cross_icon.png";
// import { ShopContext } from "../../Context/ShopContext";

// const CartItems = () => {
//   const {products} = useContext(ShopContext);
//   const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {products.map((e)=>{

//         if(cartItems[e.id]>0)
//         {
//           return  <div>
//                     <div className="cartitems-format">
//                       <img className="cartitems-product-icon" src={e.image} alt="" />
//                       <p cartitems-product-title>{e.name}</p>
//                       <p>${e.new_price}</p>
//                       <button className="cartitems-quatity">{cartItems[e.id]}</button>
//                       <p>${e.new_price*cartItems[e.id]}</p>
//                       <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
//                     </div>
//                      <hr />
//                   </div>;
//         }
//         return null;
//       })}
      
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cartitems-promobox">
//             <input type="text" placeholder="promo code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;


// import React, { useContext, useState } from "react";
// import "./CartItems.css";
// import cross_icon from "../Assets/cart_cross_icon.png";
// import { ShopContext } from "../../Context/ShopContext";

// const CartItems = () => {
//   const { products } = useContext(ShopContext);
//   const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

//   const [showCheckoutModal, setShowCheckoutModal] = useState(false);
//   const [address, setAddress] = useState({
//     street: "",
//     city: "",
//     zipCode: "",
//   });
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const handleProceedToCheckout = () => {
//     setShowCheckoutModal(true);
//   };

//   const handleCloseCheckoutModal = () => {
//     setShowCheckoutModal(false);
//     setOrderPlaced(false);
//   };

//   const handleAddressChange = (e) => {
//     setAddress({
//       ...address,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleConfirmOrder = () => {
//     // Add logic to handle the confirmation of the order and address
//     // For example, you can send this information to your backend
//     console.log("Order confirmed with address:", address);
//     // Here, you can reset the address or perform any additional actions
//     setAddress({
//       street: "",
//       city: "",
//       zipCode: "",
//     });
//     setOrderPlaced(true);
//   };

//   return (
//     <div className="cartitems">
//       <div className="cartitems-header">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {products.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id} className="cartitems-item">
//               <img className="cartitems-product-icon" src={e.image} alt="" />
//               <p className="cartitems-product-title">{e.name}</p>
//               <p>${e.new_price}</p>
//               <button className="cartitems-quantity">{cartItems[e.id]}</button>
//               <p>${e.new_price * cartItems[e.id]}</p>
//               <img
//                 onClick={() => {
//                   removeFromCart(e.id);
//                 }}
//                 className="cartitems-remove-icon"
//                 src={cross_icon}
//                 alt=""
//               />
//             </div>
//           );
//         }
//         return null;
//       })}

//       <div className="cartitems-footer">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cartitems-promobox">
//             <input type="text" placeholder="promo code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>

//       {showCheckoutModal && (
//         <div className="checkout-modal">
//           <div className="checkout-modal-content">
//             <span className="close" onClick={handleCloseCheckoutModal}>
//               &times;
//             </span>
//             {!orderPlaced ? (
//               <>
//                 <h2>Enter Your Address</h2>
//                 <div className="address-inputs">
//                   <label>Street:</label>
//                   <input
//                     type="text"
//                     name="street"
//                     value={address.street}
//                     onChange={handleAddressChange}
//                     placeholder="Enter your street address"
//                   />
//                   <label>City:</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={address.city}
//                     onChange={handleAddressChange}
//                     placeholder="Enter your city"
//                   />
//                   <label>Zip Code:</label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={address.zipCode}
//                     onChange={handleAddressChange}
//                     placeholder="Enter your zip code"
//                   />
//                 </div>
//                 <button onClick={handleConfirmOrder}>Confirm Order Placed</button>
//               </>
//             ) : (
//               <div className="order-placed-message">
//                 <p>Your order has been placed!</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItems;




import React, { useContext, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(
    ShopContext
  );

  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);

  const openCheckoutModal = () => {
    setCheckoutModalOpen(true);
  };

  const closeCheckoutModal = () => {
    setCheckoutModalOpen(false);
  };

  const handleConfirmOrder = () => {
    // Logic to handle order confirmation
    // Display a confirmation message
    alert("Your order has been confirmed!");
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  className="cartitems-product-icon"
                  src={e.image}
                  alt=""
                />
                <p className="cartitems-product-title">{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-footer">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={openCheckoutModal}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="checkout-modal">
          <div className="checkout-modal-content">
            <span className="close" onClick={closeCheckoutModal}>
              &times;
            </span>
            <h2>Enter Your Address</h2>
            <div className="address-inputs">
              <label htmlFor="street">Street:</label>
              <input type="text" id="street" />
              <label htmlFor="city">City:</label>
              <input type="text" id="city" />
              <label htmlFor="zip">ZIP Code:</label>
              <input type="text" id="zip" />
              <button className="confirm-button" onClick={handleConfirmOrder}>
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
