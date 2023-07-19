import React from 'react'
import ProductDetail from './ProductDetail'

function Product(props) {
  return (
    <div>
    <h2>{props.price}</h2>
   <ProductDetail name="product Name" desc="Product Description"/>
    </div>
  )
}

export default Product