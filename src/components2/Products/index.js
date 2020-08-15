import React from 'react'
import PropTypes from 'prop-types'
const Products = ({ products }) => {
    const onHandleRemove = (id) => {
        // onRemove(id);
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>

                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price }, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td><img src="{image}" /></td>
                                        <td>{price}</td>
                                        <td>
                                            <button className=" btn btn-danger" onClick={() => onHandleRemove(id)}>Delete</button>
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

Products.propTypes = {

}

export default Products
