import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Sidebar = props => {
    return (
        //         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        //             {/* Sidebar - Brand */}
        //             <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        //                 <div className="sidebar-brand-icon rotate-n-15">
        //                     <i className="fas fa-laugh-wink" />
        //                 </div>
        //                 <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        //             </a>
        //             {/* Divider */}
        //             <hr className="sidebar-divider my-0" />
        //             {/* Nav Item - Dashboard */}
        //             <li className="nav-item">
        //                 <a className="nav-link" href="index.html">
        //                     <i className="fas fa-fw fa-tachometer-alt" />
        //                     <span>Dashboard</span></a>
        //             </li>
        //             {/* Divider */}
        //             <hr className="sidebar-divider" />
        //             {/* Heading */}
        //             <div className="sidebar-heading">
        //                 Products
        //     </div>
        //             {/* Nav Item - Pages Collapse Menu */}
        //             <li className="nav-item">
        //                 <Link to="/admin/products" className="nav-link">
        //                     <span>Danh sách sản phẩm</span>
        //                 </Link>



        //             </li>
        //             {/* Nav Item - Utilities Collapse Menu */}
        //             <li className="nav-item">
        //                 <Link to="/admin/add-products" className="nav-link">
        //                     <span>Thêm sản phẩm</span>
        //                 </Link>

        //             </li>
        //             {/* Divider */}
        //             <hr className="sidebar-divider" />
        //             {/* Heading */}


        //             <hr className="sidebar-divider d-none d-md-block" />
        //             {/* Sidebar Toggler (Sidebar) */}
        //             <div className="text-center d-none d-md-inline">
        //                 <button className="rounded-circle border-0" id="sidebarToggle" />
        //             </div>
        //         </ul>
        //     )
        // }

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link to="/admin" class="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                </Link>

            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">

                <Link to="/admin/products" class="nav-link">
                    <i className="fas fa-fw fa-cog" />
                    <span>Quản lý sản phẩm</span>
                </Link>

            </li>

            <li className="nav-item">

                <Link to="/admin/category" class="nav-link">
                    <i className="fas fa-fw fa-cog" />
                    <span>Quản lý danh mục</span>
                </Link>

            </li>
{/* 
            <li className="nav-item">

                <Link to="/admin/blogs" class="nav-link">
                    <i className="fas fa-fw fa-cog" />
                    <span>Quản lý bài viết</span>
                </Link>

            </li>

            <li className="nav-item">

                <Link to="/admin/category-blogs" class="nav-link">
                    <i className="fas fa-fw fa-cog" />
                    <span>Quản lý danh mục bài viết</span>
                </Link>

            </li> */}
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    )
}
Sidebar.propTypes = {

}

export default Sidebar

{/* End of Sidebar */ }
