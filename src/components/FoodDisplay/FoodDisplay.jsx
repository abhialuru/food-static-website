 import React, { useContext } from 'react'
 import './FoodDisplay.css'
 import { StoreContext } from '../../App'
import FoodItems from '../FoodItems/FoodItems'
 
 function FoodDisplay({category}) {
  
  const { food_list } = useContext(StoreContext)
   
 
   return (
     <div className='food-display-container'>
       <h1>Top Food Choices.</h1>
       <div className="items">
        {food_list.map((item, index)=> { if (category==='All' || category===item.category) {
         return <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        }
        })}
       </div>
          </div>
   )
 }
 
 export default FoodDisplay;