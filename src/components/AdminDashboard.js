import React from "react";
import AdminLogout from "./AdminLogout";
import { Link } from 'react-router-dom';

function AdminDashboard() {

    const admin = JSON.parse(localStorage.getItem("mytoken"));
    return (<div>
        {
            <div>
                {
                    admin !== null ?
                        <div>
                            <div align="center">
                                <div class="flex-container" align="center">
                                    <div class="flex-item"><img src="/imagesProject/Logo1.png" alt="logo image" width="100px" height="60px"/>
                                    <h5>ADMIN</h5>
                                    <h1 align="right"><AdminLogout/></h1>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="container admin">
                                {/* row 1 */}
                                <div class="row">

                                    <div class="col-md-4">
                                        <Link to="/product/all">
                                            <div class="card1" >
                                                <div class="card-body1" text-center>
                                                    <div class="container">
                                                        <img class="img-fluid" src="/Images/product.png" alt="product-icon" />
                                                    </div>
                                                    <h5 align="center" class="text-uppercase text-muted">Product</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div class="col-md-4">
                                        <Link to="/all/category">
                                        <div class="card1">
                                            <div class="card-body1" text-center>
                                                <div class="container">
                                                    <img class="img-fluid" src="/Images/category.png" alt="categories-icon" />
                                                </div>
                                                <h5 align="center" class="text-uppercase text-muted">Categories</h5>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>

                                    <div class="col-md-4">
                                        <Link to="/customer/all">
                                            <div class="card1">
                                                <div class="card-body1" text-center>
                                                    <div class="container">
                                                        <img class="img-fluid" src="/Images/allcustomer.png" alt="user_icon" />

                                                    </div>
                                                    <h5 align="center" class="text-uppercase text-muted">CUSTOMERS</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* row 2 */}
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <Link to="/product/add">
                                            <div class="card1">
                                                <div class="card-body1" text-center>
                                                    <div class="container">
                                                        <img class="img-fluid" src="/Images/addproduct.png" alt="user_icon" />

                                                    </div>
                                                    <h5 align="center" class="text-uppercase text-muted">Product</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div class="col-md-4">
                                        <Link to="/product/update/:pid">
                                            <div class="card1">
                                                <div class="card-body1" text-center>
                                                    <div class="container">
                                                        <img class="img-fluid" src="/Images/updateproduct.png" alt="user_icon" />

                                                    </div>
                                                    <h5 align="center" class="text-uppercase text-muted">Product</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div class="col-md-4">
                                        <Link to="/product/delete">
                                            <div class="card1">
                                                <div class="card-body1" text-center>
                                                    <div class="container">
                                                        <img class="img-fluid" src="/Images/delete.png" alt="user_icon" />

                                                    </div>
                                                    <h5 align="center" class="text-uppercase text-muted">Product</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                </div>

                                {/* row 3 */}
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                    <Link to="/add/category">
                                        <div class="card1">
                                            <div class="card-body1" text-center>
                                                <div class="container">
                                                    <img class="img-fluid" src="/Images/addcategory.png" alt="user_icon" />

                                                </div>
                                                <h5 align="center" class="text-uppercase text-muted">Categories</h5>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>


                                </div>

                            </div>
                        </div>
                        : <h2>Please login</h2>
                }
            </div>
        }
    </div>)
}

export default AdminDashboard;