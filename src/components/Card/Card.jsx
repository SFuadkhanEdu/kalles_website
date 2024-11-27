import React from 'react'
import "./index.css"
function Card({image,title,price}) {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default Card