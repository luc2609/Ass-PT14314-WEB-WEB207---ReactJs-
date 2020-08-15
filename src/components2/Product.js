import React from 'react';
import PropTypes from 'prop-types'

const Product = props => {
    return (
        <ul>{
            props.list.map(show =>
                <li>{show.name} {show.age} {show.status}</li>
            )
        }
        </ul>
    )

}

Product.propTypes = {

}

export default Product