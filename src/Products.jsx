import React from "react";
import './Style.css'
import { useDispatch } from "react-redux";
import { add } from "./store/cartSlice";

function Products({ product, addToCart }) {
  return (
    <div className="MP">{
      product.map((productItem, productIndex) => {
        return (

          <div className="products">
            <img src={productItem.url} alt="" />
            <p1 className='p1'>{productItem.name} | {productItem.category}</p1>
            <p1 className='p1'>{productItem.seller}</p1>
            <p1 className='p1'>Rs:{productItem.price}/-</p1>
            <div className="button" onClick={() => addToCart(productItem)}>Add To Cart</div>
            
          </div>

        )


      })
    }
    </div>
  )
}

export default Products
