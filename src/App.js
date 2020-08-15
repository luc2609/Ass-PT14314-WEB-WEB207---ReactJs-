
import './App.scss';
import React, { useState, useEffect } from 'react';
import dataFake from './dataFake';
import Routers from './routers';
import apiRequest from './api/productApi';
import swal from 'sweetalert';
import axios from "axios";


function App() {

  const [products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [status, setStatus] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [cateblogs, setCateblogs] = useState([]);

  // // Hiển thị product từ localStorage
  useEffect(() => {
    getProducts();
    getCategories();
    getStatus();
    getCateblogs();
    getBlogs();
  }, []);

 // Lấy danh sách sản phẩm
 const getProducts = async () => {
  const { data } = await axios.get("http://localhost:8000/products");
  setProducts(data);
};
  //Xóa sản phẩm
  const deleteProduct = async id => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    swal({
      title: "Bạn có chắc chắn muốn xóa không ?",
      text: "Sau khi xóa, bạn sẽ không lấy lại được dữ liệu!",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
    })
      .then(() => {
        getProducts();
        swal("Đã xóa thành công!", {
          icon: "success",
        });

      });
  }

  const deleteCategory = async id => {
    await axios.delete(`http://localhost:8000/category/${id}`);
    swal({
      title: "Bạn có chắc chắn muốn xóa không ?",
      text: "Sau khi xóa, bạn sẽ không lấy lại được dữ liệu!",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
    })
      .then(() => {
        getCategories();
        swal("Đã xóa thành công!", {
          icon: "success",
        });

      });
  }

  const deleteBlogs = async id => {
    await axios.delete(`http://localhost:8000/blogs/${id}`);
    swal({
      title: "Bạn có chắc chắn muốn xóa không ?",
      text: "Sau khi xóa, bạn sẽ không lấy lại được dữ liệu!",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
    })
      .then(() => {
        getBlogs();
        swal("Đã xóa thành công!", {
          icon: "success",
        });
      });
  }

  // Thêm sản phẩm
  const onHandleAdd = async (newData) => {
    const { data } = await axios.post("http://localhost:8000/products", newData);
    swal({
      title: "Thêm sản phẩm thành công!",
      icon: "success",
      button: "Ok",
    });
    setProducts([...products, data])
  }

  // Thêm danh mục
  const onHandleAddCate = async (data) => {
    const datanew = await axios.post("http://localhost:8000/category", data)
    swal({
      title: "Thêm danh mục thành công!",
      icon: "success",
      button: "Ok",
    });
    setCategories([...Categories, datanew.data])
  }

  // Thêm bài viết
  const onHandleAddBlogs = async (data) => {
    const blogsnew = await axios.post("http://localhost:8000/blogs", data)
    swal({
      title: "Thêm bài viết thành công!",
      icon: "success",
      button: "Ok",
    });
    setBlogs([...blogs, blogsnew.data])
  }

  //Update sản phẩm
  const onHandleUpdate = async (id, data) => {
    const { dataupdate } = await axios.put(`http://localhost:8000/products/${id}`, data)
    swal({
      title: "Sửa sản phẩm thành công!",
      icon: "success",
      button: "Ok",
    });
  }

  //Update danh mục
  const onHandleUpdateCate = async (id, data) => {
    const { dataupdate } = await axios.put(`http://localhost:8000/category/${id}`, data)
    swal({
      title: "Sửa danh mục thành công!",
      icon: "success",
      button: "Ok",
    });
  }

  //Update bài viết
  const onHandleUpdateBlogs = async (id, data) => {
    const { dataupdate } = await axios.put(`http://localhost:8000/blogs/${id}`, data)
    swal({
      title: "Sửa bài viết thành công!",
      icon: "success",
      button: "Ok",
    });
  }

 

  //Lấy danh sách danh mục
  const getCategories = async () => {
    const { data } = await axios.get("http://localhost:8000/category");
    setCategories(data);
  };
  const getStatus = async () => {
    const { data } = await axios.get("http://localhost:8000/status");
    setStatus(data);
  };
  // Lấy danh sách danh mục bài viết
  const getCateblogs = async () => {
    const { data } = await axios.get("http://localhost:8000/cateblogs");
    setCateblogs(data);
  };
  const getBlogs = async () => {
    const { data } = await axios.get("http://localhost:8000/blogs");
    setBlogs(data);
  };


  return (
    <div className="App">
      {/* <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} /> */}
      <Routers status={status} products={products} onAdd={onHandleAdd} onRemove={deleteProduct} onUpdate={onHandleUpdate}
        Categories={Categories} onRemoveCate={deleteCategory} onAddCate={onHandleAddCate} onUpdateCate={onHandleUpdateCate}
        cateblogs={cateblogs} blogs={blogs} onAddBlogs={onHandleAddBlogs} onRemoveBlogs={deleteBlogs} onUpdateBlogs={onHandleUpdateBlogs} />
    </div>
  )

}
export default App;