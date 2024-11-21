 import React, { createContext, useState } from 'react'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/order/Placeorder';
import { food_list } from './assets/assets'
   
export const StoreContext = createContext();

 function App() {
   
   const [cartItems, setCartItems] = useState({});
 
   function addToCart(ItemId) {
     if (!cartItems[ItemId]) {
        setCartItems(prev=>({...prev,[ItemId]:1}))
     }else{
      setCartItems(prev=>({...prev,[ItemId]:prev[ItemId]+1}))
     }
   }
    
   function removeFromCart(ItemId) {
         setCartItems(prev=>({...prev,[ItemId]:prev[ItemId]-1}))
   }

    const contextValue =  {
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
        
    };
 
    const route = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/cart',
          element: <Cart/>
        },
        {
          path: '/order',
          element: <Placeorder/>
        },     
    ]}
])

   return (
       <div className='app'>
      <StoreContext.Provider  value={contextValue}>
          <RouterProvider router={route} />
      </StoreContext.Provider>
      </div>
  )
 }

 
 export default App;