import React from 'react'
import PropTypes from 'prop-types'

const CategoryList = ({ Categories }) => {

    return (
        <div>
            <div className="row">
                {Categories.map(({ id, cate_name, image }) => (
                    <div className="col-3">
                        <div className="block1 hov-img-zoom pos-relative m-b-30">
                            <img src={image} alt="IMG-BENNER" />
                            <div className="block1-wrapbtn w-size2">
                                {/* Button */}
                                <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                    {cate_name}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

CategoryList.propTypes = {

}

export default CategoryList
