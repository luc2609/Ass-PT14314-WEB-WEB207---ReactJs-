import React from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const CategoryListPro = ({ products, Categories }) => {
    let { id } = useParams();
    const ListProCate = products.filter((product) => product.cate_id == id)
    return (
        <div>
            {/* Page Heading */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Table</h1>
            </div>

            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Danh mục</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Giá thường</th>
                                    <th scope="col">Giá sale</th>
                                    <th scope="col">Tình trạng hàng</th>
                                    <th scope="col" >Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {ListProCate.map(({ id, name, cate_id, image, price_regular, price_sale, status_id }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td>{Categories.map(({ id, cate_name }) => { return id == cate_id ? cate_name : "" })}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price_regular}</td>
                                        <td>{price_sale}</td>
                                        <td>{status_id}</td>
                                        <td>
                                            <Link className="btn btn-primary mr-2" to={`/admin/edit-products/${id}`}><i class="far fa-edit"></i></Link>
                                            <button className="btn btn-danger" ><i class="fas fa-trash"></i></button>

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

CategoryListPro.propTypes = {

}

export default CategoryListPro
