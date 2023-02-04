import React from 'react'
import './product.css'

function Product({ item }) {
  return (
    <div className='productCard'>
      <p className='productTitle'>{item.title}</p>
      <p className='productPrice'>
        <span>Price </span>$ {item.price}
      </p>
      <img
        className='productImg'
        src={item.image}
        width='100px'
        height='100px'
        alt=''
      />
    </div>
  )
}

export default Product
