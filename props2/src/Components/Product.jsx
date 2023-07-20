import React from "react";
import ProductDetail from "./ProductDetail";

export function Product({Price}) {
    return (
        <div className="Product">
            <h2>{Price}</h2>
            <ProductDetail Name="OMO" Desc="soap" />
        </div>
    )
}

export default Product