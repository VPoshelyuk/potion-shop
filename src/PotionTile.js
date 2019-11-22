import React from 'react'

/* 
Write an abstracted component that can be used in place of InventoryTile AND ShopTile

Consider what the tiles have in common and what they do not: 
- For things that are the same, copy and pasting works just fine! 
- For things that are different, consider how you might make use of props and JSX to have the same component behave differently when rendered by different parents 
*/

const PotionTile = (props) => {
  return (
    props.addToInventory ?
      <div key={props.potion.id} className="card">
        <div onClick={() => props.addToInventory(props.potion.id)} className="image-wrapper">
          <img className="image" alt={props.potion.name} src={props.potion.image_url} />
        </div>
        {props.children}
      </div>
      :
      <div key={props.potion.id} className="inventory-card">
        <div onClick={() => props.sell(props.potion.id)} className="image-wrapper">
          <img className="image" alt={props.potion.name} src={props.potion.image_url} />
        </div>
        {props.children}
      </div>
    
  )
}

export default PotionTile