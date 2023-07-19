import React from 'react'

function ProductDetail(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    <h2>{props.desc}</h2>
    </div>
  )
}

export default ProductDetail