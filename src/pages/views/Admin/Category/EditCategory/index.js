import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import axios from "axios";

const EditCategory = ({ Categories, onUpdateCate }) => {
    let history = useHistory();
    const { id } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [category, setCategory] = useState({
        cate_name: "",
        image: "",
        desc: "",
    });
    const { cate_name, image, desc } = category;
    const onHandleChange = e => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        loadCategory();

    }, [])
    const onHandleSubmit = data => {
        onUpdateCate(id, data);
        history.push("/admin/category");

    }

    const loadCategory = async () => {
        const result = await axios.get(`http://localhost:8000/category/${id}`)
        setCategory(result.data);
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
                                        <h1 className="h4 text-gray-900 mb-4 ">Sửa danh mục</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit(onHandleSubmit)}>

                                        <div className="form-group">
                                            <label>Tên danh mục</label>
                                            <input type="text"
                                                name="cate_name"
                                                value={cate_name}
                                                onChange={e => onHandleChange(e)}
                                                className="form-control "
                                                id="inputCategoryName"
                                                ref={register({ required: true, minLength: 4, pattern: /^[^\s]+(\s+[^\s]+)*$/ })}
                                            />
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Tên danh mục không được để trống </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "minLength" && <span>Tên danh mục phải ít nhất 4 kí tự </span>}</small>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "pattern" && <span>Tên danh mục không được để trống </span>}</small>
                                        </div>

                                        <div className="form-group">
                                            <img src={image} width="50%" />
                                        </div>
                                        <div className="form-group">
                                            <label>Ảnh danh mục</label>
                                            <input type="text"
                                                name="image"
                                                value={image}
                                                onChange={e => onHandleChange(e)}
                                                className="form-control "
                                                id="inputCategoryImage"
                                                ref={register({ required: true })} />
                                            <small id="nameHelp" className="form-text text-danger">{errors.image && <span>Ảnh không được để trống</span>}</small>
                                        </div>

                                        <div className="form-group">
                                            <label>Mô tả danh mục</label>
                                            <textarea type="text"
                                                name="desc"
                                                value={desc}
                                                onChange={e => onHandleChange(e)}
                                                className="form-control "
                                                id="inputCategoryName"
                                                ref={register({ required: true })}
                                                placeholder="Mô tả danh mục">

                                            </textarea>
                                            <small id="nameHelp" className="form-text text-danger">{errors.name?.type === "required" && <span>Tên sản phẩm không được để trống </span>}</small>
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

EditCategory.propTypes = {

}

export default EditCategory
