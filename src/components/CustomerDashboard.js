import React from "react";
import CustomerLogout from "./CustomerLogout";
import { Link } from 'react-router-dom';


function CustomerDashboard(){

    const customer = JSON.parse(localStorage.getItem("mytoken"));
    return(
        <div>
            {
                customer !== null?
                <div>
                    <h1>Customer Dashboard</h1>
                    <b>Welcome {customer.username}</b>
                    <hr></hr>
                    {/* <Link to="/product/all">Product All</Link><br></br> */}
                    <CustomerLogout/>
                </div>
                :<h2>Please login</h2>
            }
        </div>
    )
}

export default CustomerDashboard;