import React from 'react'
import card_placeholder from '../../assets/images/270x295.svg'

const Card = ({ product }) => {

  return (
    <article className='card-content'>
      <div className='image-container'>
        <img src={product.imageURL} alt={product.imageURL} />
      </div>
      <div className='product-info'>
        <div className="product-title">{product.name.slice(0,36)}</div>
        <div className="price">{product.price} €</div>
      </div>
    </article>
  )
}

export default Card