import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>An e-commerce website is an online platform that facilitate buing and selling of products or services over the internet serves as a virtual marketplace where businesses andd individual showcase their products, interact with customers, and conduct transactions without the need for a phsical presence. E-commerce websites have gained immense popularit due to their convenient accessibility, and teh global reach they offer.</p>
          <p>E-commerce websites typically display products or services a detailed descriptions, images,prices, and any available variations(e.g., sizes, colors). Each product usually has its own dedicated pagewith relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox