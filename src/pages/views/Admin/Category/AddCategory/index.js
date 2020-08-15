import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import swal from 'sweetalert';
import axios from "axios";

const AddCategory = ({ onAddCate }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = data => {
        onAddCate(data);
        history.push("/admin/category");
    }
    return (
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6 " >
                <div className="card o-hidden border-0 shadow-lg my-5 justify-content-center">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4 ">Thêm danh mục</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit(onHandleSubmit)}>
                                        <div className="form-group">
                                            <label>Tên danh mục</label>
                                            <input type="text"
                                                name="cate_name"
                                                className="form-control"
                                                id="inputCategoryName"
                                                ref={register({ required: true, minLength: 4, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} />
                                            <small id="nameHelp" className="form-text text-danger">{errors.cate_name?.type === "required" && <span>Tên danh mục không được để trống </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.cate_name?.type === "minLength" && <span>Tên danh mục phải ít nhất 4 kí tự </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.cate_name?.type === "pattern" && <span>Tên danh mục không được để trống </span>}</small>
                                        </div>


                                        <div className="form-group">
                                            <label>Ảnh danh mục</label>
                                            <input type="text"
                                                name="image"
                                                className="form-control "
                                                id="inputCategoryImage"
                                                ref={register({ required: true })} />
                                            <small id="nameHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
                                        </div>

                                        <div className="form-group">
                                            <label>Mô tả danh mục</label>
                                            <textarea type="text"
                                                name="desc"
                                                className="form-control "
                                                id="inputCategoryName"
                                                ref={register({ required: true })}>
                                            </textarea>
                                            <small id="nameHelp" className="form-text text-danger">{errors.desc?.type === "required" && <span>Mô tả danh mục không được để trống </span>}</small>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-user ">Submit</button>


                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
