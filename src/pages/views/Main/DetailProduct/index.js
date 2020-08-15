import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'

const DetailProduct = ({ products, Categories }) => {
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);
    const [currentProduct, setCurrentProduct] = useState(product);


    return (
        <div>
            {/* Product Detail */}
            <div className="container bgwhite p-t-35 p-b-80">
                <div className="flex-w flex-sb">
                    <div className="w-size13 p-t-30 respon5">
                        <div className="wrap-slick3 flex-sb flex-w">
                            <div className="wrap-slick3-dots" />
                            <div className="wrap-pic-w">
                                <img src={currentProduct.image} alt="IMG-PRODUCT" />
                            </div>
                        </div>
                    </div>
                    <div className="w-size14 p-t-30 respon5">
                        <h4 className="product-detail-name m-text16 p-b-13" >
                            {currentProduct.name}
                        </h4>

                        <span className="m-text17">
                            <del className="mr-2">{currentProduct.price_regular}</del>
                            {currentProduct.price_sale}
                        </span>
                        <p className="s-text8 p-t-10">
                            {currentProduct.MotaNgan}
                        </p>
                        <p className="s-text8 p-t-10">
                            {currentProduct.chiTietSanPham}
                        </p>
                        <div className="p-b-45 mt-5">
                            <span className="s-text8">Category: {Categories.map(({ id, cate_name }) => { return id == currentProduct.cate_id ? cate_name : "" })}</span>
                        </div>
                        <div className="p-t-33 p-b-60">

                            <div className="flex-r-m flex-w p-t-10">
                                <div className="w-size16 flex-m flex-w">
                                    <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                        <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                            <i className="fs-12 fa fa-minus" aria-hidden="true" />
                                        </button>
                                        <input className="size8 m-text18 t-center num-product" type="number" name="num-product" defaultValue={1} />
                                        <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                            <i className="fs-12 fa fa-plus" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                                        {/* Button */}
                                        <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                            Add to Cart
                      </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
