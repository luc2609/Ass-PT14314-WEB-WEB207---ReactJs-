import React, { useState, useEffect } from 'react';
import axios from "axios";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const ListProduct = ({ products, Categories }) => {
    return (
        <div>
            {/* Title Page */}
            <section className="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={{ backgroundImage: 'url(https://colorlib.com/etc/fashe/images/heading-pages-02.jpg)' }}>
                <h2 className="l-text2 t-center">
                    Women
          </h2>
                <p className="m-text13 t-center">
                    New Arrivals Women Collection 2018
          </p>
            </section>
            {/* Content page */}
            <section className="bgwhite p-t-55 p-b-65">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                            <div className="leftbar p-r-20 p-r-0-sm">
                                {/*  */}
                                <h4 className="m-text14 p-b-7">Categories</h4>
                                <ul className="p-b-54">
                                    {Categories.map(({ id, cate_name }) => (
                                        <li className="p-t-4">
                                            <a href="#" className="s-text13 active1">{cate_name}</a>
                                        </li>
                                    ))}
                                </ul>
                                {/*  */}
                                <h4 className="m-text14 p-b-32">
                                    Filters
                  </h4>
                                <div className="filter-price p-t-22 p-b-50 bo3">
                                    <div className="m-text15 p-b-17">
                                        Price
                    </div>
                                    <div className="wra-filter-bar">
                                        <div id="filter-bar" />
                                    </div>
                                    <div className="flex-sb-m flex-w p-t-16">
                                        <div className="w-size11">
                                            {/* Button */}
                                            <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                                                Filter
                        </button>
                                        </div>
                                        <div className="s-text3 p-t-10 p-b-10">
                                            Range: $<span id="value-lower">610</span> - $<span id="value-upper">980</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-color p-t-22 p-b-50 bo3">
                                    <div className="m-text15 p-b-12">
                                        Color
                    </div>
                                    <ul className="flex-w">
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1" />
                                            <label className="color-filter color-filter1" htmlFor="color-filter1" />
                                        </li>
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2" />
                                            <label className="color-filter color-filter2" htmlFor="color-filter2" />
                                        </li>
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3" />
                                            <label className="color-filter color-filter3" htmlFor="color-filter3" />
                                        </li>
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4" />
                                            <label className="color-filter color-filter4" htmlFor="color-filter4" />
                                        </li>
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5" />
                                            <label className="color-filter color-filter5" htmlFor="color-filter5" />
                                        </li>
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6" />
                                            <label className="color-filter color-filter6" htmlFor="color-filter6" />
                                        </li>
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7" />
                                            <label className="color-filter color-filter7" htmlFor="color-filter7" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="search-product pos-relative bo4 of-hidden">
                                    <input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..." />
                                    <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                                        <i className="fs-12 fa fa-search" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">

                            {/* Product */}
                            <div className="row">
                                {products.map(({ id, name, image, price_regular, price_sale }, index) => (
                                    <div className="col-sm-12 col-md-6 col-lg-4 p-b-50" key={index}>
                                        {/* Block2 */}
                                        <div className="block2">
                                            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                                <img src={image} alt="IMG-PRODUCT" />
                                                <div className="block2-overlay trans-0-4">
                                                    <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                                        <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                                        <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                                    </a>
                                                    <div className="block2-btn-addcart w-size1 trans-0-4">
                                                        {/* Button */}
                                                        <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                                            Add to Cart
                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="block2-txt p-t-20">
                                                <Link to={`/fashe/detail-product/${id}`}>
                                                    <p>{name}</p>
                                                </Link>

                                                <span className="block2-price m-text6 p-r-5">
                                                    <del className="mr-2">{price_regular}</del>
                                                    {price_sale}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div >
    )
}

ListProduct.propTypes = {

}

export default ListProduct
