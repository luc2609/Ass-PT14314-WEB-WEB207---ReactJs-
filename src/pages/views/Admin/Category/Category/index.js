import React, { useState, useEffect } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Category = ({ Categories, onRemoveCate }) => {
    const deleteCategory = (id) => {
        onRemoveCate(id)
    }
    return (
        <div>
            {/* Page Heading */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Table</h1>
                <Link to="/admin/add-category" class="btn btn-primary btn-icon-split d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                    </span>
                    <span class="text">Thêm danh mục</span>
                </Link>
            </div>



            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách danh mục </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name Category</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Desc</th>
                                    <th scope="col" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Categories.map(({ id, cate_name, image, desc }, index) => (
                                    <tr key={index}>

                                        <th scope="row">{index + 1}</th>
                                        <td>{cate_name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{desc}</td>
                                        <td>
                                            {/* <Link className="btn btn-primary mr-2" to={`/admin/category-list/${id}`}>Chi Tiết</Link> */}
                                            <Link className="btn btn-primary mr-2" to={`/admin/edit-category/${id}`}>Sửa</Link>
                                            <button className="btn btn-danger" onClick={() => deleteCategory(id)} >Xoá</button>

                                        </td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category
