import React, { useState } from 'react'
import './Style.css'

function CartList({cart}){
  return (
    <div className='List'>
      {
         cart.map((cartItem,cartIndex)=>{
            return(
                <div className='cartitems'>
                    
                      <img src={cartItem.url} alt="" className='cartimage'/>
                      <span>{cartItem.name}</span>
                      <span>-Quantity:</span>
                      
                      <span>{cartItem.quantity}</span>
                     
                      <span>Rs:{cartItem.price}/-</span>
                     
                     
                </div>
            )
         })
      }
                      <p className='total'> Total : 
                      {
                         cart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                      }
                      </p>

    </div>
  )
}

export default CartList
