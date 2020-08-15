import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import swal from 'sweetalert';
import axios from "axios";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import firebase from '../../../../../firebase'

const AddProduct = ({ onAdd, Categories, status }) => {
    const [chiTietSanPham, setChiTietSanPham] = useState("");
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onHandleSubmit = data => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    chiTietSanPham,
                    image: url
                }
                onAdd(newData)
                history.push("/admin/products");

            })
        });
    }
    const handleEditorChange = (event, editor) => {
        const chiTietSanPham = editor.getData();
        setChiTietSanPham(chiTietSanPham);
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
                                    <div className="text-center"><h1 className="h4 text-gray-900 mb-4 ">Thêm sản phẩm</h1></div>
                                    <form className="" onSubmit={handleSubmit(onHandleSubmit)}>
                                        <div className="row" >
                                            <div className="form-group col-7">
                                                <label>Tên sản phẩm</label>
                                                <input type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="inputProductName"
                                                    ref={register({
                                                        required: true, minLength: 4, pattern: /^[^\s]+(\s+[^\s]+)*$/
                                                    })}
                                                />
                                                <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Tên sản phẩm không được để trống </span>}</small>
                                                <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "minLength" && <span>Tên sản phẩm phải ít nhất 4 kí tự </span>}</small>
                                                <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "pattern" && <span>Tên sản phẩm không được để trống </span>}</small>
                                            </div>


                                            <div className="form-group col-5">
                                                <label>Danh mục</label>
                                                <select className="form-control" name="cate_id"
                                                    ref={register({ required: true })} >
                                                    <option>Chọn danh mục sản phẩm</option>
                                                    {Categories.map(({ id, cate_name }) => (
                                                        <option value={id}>{cate_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Mô tả ngắn sản phẩm</label>
                                            <textarea type="text"
                                                name="MotaNgan"
                                                className="form-control form-control-user"
                                                id="inputProductName"
                                                ref={register({ required: true })}>
                                            </textarea>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Mô tả sản phẩm không được để trống </span>}</small>

                                        </div>

                                        <div className="form-group">
                                            <label>Ảnh sản phẩm</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input type="file"
                                                        className="custom-file-input"
                                                        id="inputGroupFile02"
                                                        name="image"
                                                        ref={register({ required: true })} />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp"></label>
                                                </div>

                                            </div>
                                            <small id="nameHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
                                        </div>


                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Giá thường</label>
                                                <input type="text"
                                                    name="price_regular"
                                                    className="form-control form-control-user"
                                                    id="inputProductPrice"
                                                    ref={register({ required: true })}
                                                />
                                                <small id="nameHelp" className="form-text text-danger">{errors.price_regular && <span>Giá tiền không được để trống</span>}</small>
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Giá sale</label>
                                                <input type="text"
                                                    name="price_sale"
                                                    className="form-control form-control-user"
                                                    id="inputProductPrice"
                                                    ref={register({ required: true })}
                                                />
                                                <small id="nameHelp" className="form-text text-danger">{errors.price_sale && <span>Giá tiền không được để trống</span>}</small>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Chi tiết sản phẩm</label>
                                            <CKEditor

                                                editor={ClassicEditor}
                                                onInit={editor => { }}
                                                onChange={handleEditorChange}

                                            />

                                        </div>
                                        <div className="row">
                                            <div className="form-group col-5">
                                                <label>Tình trạng</label>
                                                <select className="form-control" name="status_id"
                                                    ref={register({ required: true })} >
                                                    <option>Chọn tình trạng</option>
                                                    {status.map(({ id, name }) => (
                                                        <option value={id}>{name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* <textarea type="text"
                                                rows="4" cols="50"
                                                name="chiTietSanPham"
                                                className="form-control form-control-user"
                                                id="inputProductName"
                                                ref={register({
                                                    required: true, minLength: 4, pattern: /^[^\s]+(\s+[^\s]+)*$/
                                                })}
                                            >
                                            </textarea> */}
                                        {/* <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Chi tiết sản phẩm không được để trống </span>}</small> */}



                                        <button type="submit" className="btn btn-primary btn-user ">Submit</button>


                                    </form>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

AddProduct.propTypes = {

}

export default AddProduct
