import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import axios from "axios";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditProduct = ({ products, onUpdate, Categories, status }) => {
    let history = useHistory();
    const { id } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [chiTietSanPham, setChiTietSanPham] = useState("");
    const [product, setProduct] = useState(products);
    const onHandleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
        loadProducts();

    }, [])
    const onHandleSubmit = (data) => {
        onUpdate(id, data);
        history.push("/admin/products");
    }

    const loadProducts = async () => {
        const result = await axios.get(`http://localhost:8000/products/${id}`)
        setProduct(result.data);
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
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4 ">Edit sản phẩm</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit(onHandleSubmit)}>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Tên sản phẩm</label>
                                                <input type="text"
                                                    defaultValue={product.name}
                                                    onChange={e => onHandleChange(e)}
                                                    name="name"
                                                    className="form-control"
                                                    id="inputProductName"
                                                    ref={register({ required: true, minLength: 4 })}
                                                />
                                                <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Tên sản phẩm không được để trống </span>}</small>
                                                <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "minLength" && <span>Tên sản phẩm phải ít nhất 4 kí tự </span>}</small>
                                            </div>

                                            <div className="form-group col-6">
                                                <label>Danh mục</label>
                                                <select className="form-control" name="cate_id"
                                                    ref={register({ required: true })}>
                                                    <option>Chọn danh mục sản phẩm</option>
                                                    {Categories.map(({ id, cate_name }, key) => (
                                                        id == product.cate_id ?
                                                            <option key={key} selected value={id}>{cate_name}</option>
                                                            : <option key={key} value={id}>{cate_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Mô tả sản phẩm</label>
                                            <textarea type="text"
                                                defaultValue={product.MotaNgan}
                                                onChange={e => onHandleChange(e)}
                                                name="MotaNgan"
                                                className="form-control"
                                                id="inputProductMotaNgan"
                                                ref={register({ required: true })}
                                            > </textarea>
                                            <small id="nameHelp" className="form-text text-danger">{errors.price && <span>Mô tả sản phẩm không được để trống</span>}</small>
                                        </div>
                                        <div className="form-group">
                                            {/* <img src={image} width="50%" name="image" ref={register()}></img> */}
                                            <input type="text"
                                                defaultValue={product.image}
                                                onChange={e => onHandleChange(e)}
                                                name="image"
                                                className="form-control"
                                                id="inputProductImage"
                                                ref={register({ required: true })}
                                                placeholder="Ảnh sản phẩm" />
                                            <small id="nameHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
                                        </div>


                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Giá thường</label>
                                                <input type="text"
                                                    defaultValue={product.price_regular}
                                                    onChange={e => onHandleChange(e)}
                                                    name="price_regular"
                                                    className="form-control"
                                                    id="inputProductPrice_regular"
                                                    ref={register({ required: true })}
                                                />
                                                <small id="nameHelp" className="form-text text-danger">{errors.price && <span>Giá tiền không được để trống</span>}</small>
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Giá sale</label>
                                                <input type="text"
                                                    defaultValue={product.price_sale}
                                                    onChange={e => onHandleChange(e)}
                                                    name="price_sale"
                                                    className="form-control"
                                                    id="inputProductPrice_sale"
                                                    ref={register({ required: true })}
                                                />
                                                <small id="nameHelp" className="form-text text-danger">{errors.price && <span>Giá tiền không được để trống</span>}</small>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Chi tiết sản phẩm</label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                onInit={editor => { }}
                                                onChange={handleEditorChange}
                                                data={product.chiTietSanPham}
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Tình trạng</label>
                                                <select className="form-control" name="status_id"
                                                    ref={register({ required: true })}>
                                                    <option>Chọn trạng thái</option>
                                                    {status.map(({ id, name }, key) => (
                                                        id == product.status_id ?
                                                            <option key={key} selected value={id}>{name}</option>
                                                            : <option key={key} value={id}>{name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user ">Cập nhật</button>


                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct