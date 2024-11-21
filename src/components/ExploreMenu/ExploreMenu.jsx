import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

function ExploreMenu({category, setCategory}) {

  return (
    <div className='explore-menu'>
   <h1>Explore menu here.</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic, dolores quo expedita voluptatum ducimus tempora eum minus, atque doloremque officiis consequuntur nihil inventore praesentium architecto sunt ullam tenetur nemo.</p>
    <div className="explore-menu-list">
     {menu_list.map((f,i)=> 
     <div onClick={()=>setCategory(prev=>(prev===f.menu_name?'All':f.menu_name))} className='explore-menu-items' key={i} >
      <img className={category===f.menu_name?'active':''} src={f.menu_image} />
      <p>{f.menu_name}</p></div> )}
     </div>
 
      <hr />
     </div>     
  )
}

export default ExploreMenu;