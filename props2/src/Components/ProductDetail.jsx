import React from 'react'

function ProductDetail({Name, Desc}) {
  return (
    <div>
    <h2>{Name}</h2>    
    <h3>{Desc}</h3>
    </div>  
  )
}

export default ProductDetail