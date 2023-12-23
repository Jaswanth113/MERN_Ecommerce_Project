// import React, { useContext } from "react";
// import "./ProductDisplay.css";
// import star_icon from "../Assets/star_icon.png";
// import star_dull_icon from "../Assets/star_dull_icon.png";
// import { ShopContext } from "../../Context/ShopContext";

// const ProductDisplay = (props) => {

//   const {product} = props;
//   const {addToCart} = useContext(ShopContext);

//   return (
//     <div className="productdisplay">
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           <img src={product.image} alt="img" />
//           <img src={product.image} alt="img" />
//           <img src={product.image} alt="img" />
//           <img src={product.image} alt="img" />
//         </div>
//         <div className="productdisplay-img">
//           <img className="productdisplay-main-img" src={product.image} alt="img" />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         <div className="productdisplay-right-stars">
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_dull_icon} alt="" />
//           <p>(122)</p>
//         </div>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-price-old">${product.old_price}</div>
//           <div className="productdisplay-right-price-new">${product.new_price}</div>
//         </div>
//         <div className="productdisplay-right-description">
//         </div>
//         <div className="productdisplay-right-size">
//           <h1>Select Size</h1>
//           <div className="productdisplay-right-sizes">
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
//         <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
//         <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;





import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description"></div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div
              className={`size ${selectedSize === 'S' ? 'selected' : ''}`}
              onClick={() => handleSizeSelection('S')}
            >
              S
            </div>
            <div
              className={`size ${selectedSize === 'M' ? 'selected' : ''}`}
              onClick={() => handleSizeSelection('M')}
            >
              M
            </div>
            <div
              className={`size ${selectedSize === 'L' ? 'selected' : ''}`}
              onClick={() => handleSizeSelection('L')}
            >
              L
            </div>
            <div
              className={`size ${selectedSize === 'XL' ? 'selected' : ''}`}
              onClick={() => handleSizeSelection('XL')}
            >
              XL
            </div>
            <div
              className={`size ${selectedSize === 'XXL' ? 'selected' : ''}`}
              onClick={() => handleSizeSelection('XXL')}
            >
              XXL
            </div>
          </div>
          {selectedSize && (
            <p className="confirmation-message">
              Size selected: {selectedSize}
            </p>
          )}
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
