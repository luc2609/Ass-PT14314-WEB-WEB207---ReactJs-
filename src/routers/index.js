import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products/Products'
import AddProduct from '../pages/views/Admin/Products/AddProduct'
import EditProduct from '../pages/views/Admin/Products/EditProduct';

//Category
import Category from '../pages/views/Admin/Category/Category';
import AddCategory from '../pages/views/Admin/Category/AddCategory';
import EditCategory from '../pages/views/Admin/Category/EditCategory';

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'

import ListProduct from '../pages/views/Main/ListProduct';
import dataFake from '../dataFake';
import DetailProduct from '../pages/views/Main/DetailProduct';
import Contact from '../pages/views/Main/Contact';
import CategoryList from '../pages/views/Main/Category';
import CategoryListPro from '../pages/views/Admin/Category/CategoryList';



const Routers = ({ products, Categories, onRemove, onAdd, onUpdate, onRemoveCate,
    onAddCate, onUpdateCate, status, onRemoveBlogs, cateblogs,
    blogs, onAddBlogs, onUpdateBlogs }) => {
    //Thêm
    const onHandleAdd = (products) => {
        onAdd(products)
    }
    const onHandleAddBlogs = (blogs) => {
        onAddBlogs(blogs)
    }

    const onHandleAddCate = (Categories) => {
        onAddCate(Categories)
    }

    //Xóa
    const deleteBlogs = (id) => {
        onRemoveBlogs(id)
    }
    const deleteProduct = (id) => {
        onRemove(id)
    }
    const deleteCategory = (id) => {
        onRemoveCate(id)
    }

    //Sửa
    const onHandleUpdate = (id, products) => {
        onUpdate(id, products)
    }
    const onHandleUpdateCate = (id, Categories) => {
        onUpdateCate(id, Categories)
    }
    const onHandleUpdateBlogs = (id, blogs) => {
        onUpdateBlogs(id, blogs)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' >
                                <ProductsManager products={products} Categories={Categories} onRemove={deleteProduct} status={status} />
                            </Route>
                            <Route path='/admin/add-products' >
                                <AddProduct onAdd={onHandleAdd} Categories={Categories} status={status} /></Route>
                            <Route path='/admin/edit-products/:id' >
                                <EditProduct products={products} onUpdate={onHandleUpdate} Categories={Categories} status={status} />
                            </Route>
                            <Route path='/admin/category'>
                                <Category onRemoveCate={deleteCategory} Categories={Categories} /></Route>
                            <Route path='/admin/category-list/:id'>
                                <CategoryListPro products={products} Categories={Categories} /></Route>
                            <Route path='/admin/add-category'>
                                <AddCategory onAddCate={onHandleAddCate} /></Route>
                            <Route path='/admin/edit-category/:id'>
                                <EditCategory Categories={Categories} onUpdateCate={onHandleUpdateCate} /></Route>
                            
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route path="/fashe/:path?/:path?" exact>
                    <Main>
                        <Switch>
                            <Route path="/fashe" exact>
                                <Home item = {products}/>
                            </Route>
                            <Route path="/fashe/about">
                                <About />
                            </Route>
                            <Route path="/fashe/product">
                                <ListProduct products={products} Categories={Categories} />
                            </Route>
                            <Route path="/fashe/detail-product/:id">
                                <DetailProduct products={products} Categories={Categories} />
                            </Route>
                            <Route path="/fashe/contact">
                                <Contact />
                            </Route>
                            <Route path="/fashe/category">
                                <CategoryList Categories={Categories} />
                            </Route>

                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routers
