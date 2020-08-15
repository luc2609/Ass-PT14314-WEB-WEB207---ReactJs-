import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product, index) =>
                <div key={index}>{product.name},{product.age}</div>
            )}
        </div>
    )
}
export default ProductList;
