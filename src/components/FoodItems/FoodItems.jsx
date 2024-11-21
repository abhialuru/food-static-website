import React, { useContext, useState } from 'react'
import './FoodItems.css'
import { assets, food_list } from '../../assets/assets'
import { StoreContext } from '../../App';

function FoodItems(props) {

  const  {food_list, cartItems, setCartItems, addToCart, removeFromCart} = useContext(StoreContext)

 const {id, image, price, description, name} = props

  return (
    <div className='food-items'>
        <div className="food-items-img">
            <img className='item-img' src={image} alt="" />
            {!cartItems[id] ?<img className='add-icon' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />:  
            <div  className='cart-buttons-container'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
               <p>{cartItems[id]}</p>
               <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }
             </div>
            <div className="food-items-info">
               
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
        </div>
             <p className='description'>{description}</p>
             <p className='price'>${price}</p>
    </div>
  )
}

export default FoodItems