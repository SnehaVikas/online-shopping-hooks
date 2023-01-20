import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllCustomer() {

    const [Customer, setCustomer] = useState([]);

    //Similar to componentDidMount and componentDidUpdate:

    useEffect(() => {

        axios.get("http://localhost:8081/customer/all").then(resp => setCustomer(resp.data));

    }, [])

    return (
        <div class="flex-container">
            <div class="flex-item">
                <h1>Customer List</h1>

            </div>
            <button  style={{width:"100px" }} ><Link to="/admin/dashboard" align="left">Admin Home</Link></button>
            <div class="header_fixed">
            </div>


            <table>

                <thead>

                    <tr>

                        <th>UserId</th>
                        <th>profile</th>
                        <th>UserName</th>

                        <th>Password</th>

                        <th>Role</th>

                        <th>CustomerName</th>

                        <th>Mobile</th>

                        <th>Email</th>

                        <th>CartId</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        Customer.length > 0 &&

                        Customer.map(c =>

                            <tr>
                                <td>{c.userId}</td>
                                <td><img class="img-fluid" src="/Images/user1.png" alt="user_icon" /></td>

                                <td>{c.username}</td>
                                <td>{c.password}</td>
                                <td>{c.role}</td>
                                <td>{c.customerName}</td>
                                <td>{c.mobile}</td>
                                <td>{c.email}</td>
                                <td>{c.cart.cartId}</td>
                            </tr>

                        )

                    }

                </tbody>

            </table>

        </div>

    )

}

export default AllCustomer;