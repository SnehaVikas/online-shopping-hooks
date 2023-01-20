import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllProducts() {
    const [products, setProducts] = useState([]);
    //Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        axios.get("http://localhost:8081/product/all").then(resp => setProducts(resp.data));
    }, [])

    return (<div>

        <div class="flex-container">
            <div class="flex-item">
                <h1>All Product</h1>
            </div>
            <button  style={{width:"100px" }} ><Link to="/admin/dashboard" align="left">Admin Home</Link></button>
        </div>
        <div className="AllProducts">
            <div style={{ marginTop: "25px" }}>

            </div>
            <div className="row">
                {
                    products.length > 0 &&
                    products.map(p => <div className="card alignn" style={{ width: "200px" }}>

                        <div class="card-body">
                            <img className="card-img-top" src="/Images/group.png" alt="Card image" />
                            <h4 class="card-text" style={{ color: "black" }}>{p.productName}</h4>
                            <h4 class="card-text" style={{ color: "black" }}>Rs.{p.productPrice}</h4>
                            <Link to={`/product/fetch/${p.productId}`}>View</Link>
                        </div>

                    </div>)
                }

            </div>
        </div>
        </div>

    )
}
export default AllProducts;