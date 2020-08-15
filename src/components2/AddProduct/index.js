import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddProduct = ({ onAdd }) => {
    const [valueInput, setValueInput] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setValueInput({
            ...valueInput,
            [name]: e.target.value
        });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        onAdd(valueInput)
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Add Product</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputProductName">Tên sản phẩm</label>
                            <input type="text" className="form-control" id="inputProductName" name="name" onChange={onHandleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputProductName">Ảnh sản phẩm</label>
                            <input type="text" className="form-control" id="inputProductName" name="image" onChange={onHandleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputProductName">Giá sản phẩm</label>
                            <input type="text" className="form-control" id="inputProductName" name="price" onChange={onHandleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
