import React, { useContext } from 'react'
import { StoreContext } from '../../App'

function Cart() {

 const {cartItems, food_list, removeFromCart} = useContext(StoreContext)

 
 

  return (
    <div> 
      {food_list.map((item, index)=> { if (cartItems[index]>0) {
        return <div><p>{item.name}</p></div>
      }

      })}
    
    </div>
  )
}

export default Cart