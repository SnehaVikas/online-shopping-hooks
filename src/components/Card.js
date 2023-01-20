import React from 'react'
import { Link } from "react-router-dom";
// import'./Style'css;

export const Card = ({shop}) => {
  return (
    <div className="container">
    <img src="/Images/download.jpg" className='img' alt="images"/>
      <p className='name'>{shop.productName}</p>
      <p className='price'>Rs.{shop.productPrice}</p>
      <p><Link to={`/product/fetch/${shop.productId}`}>View</Link></p>
    </div>
  )
}
export default Card;