import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchProductName() {

    const [productName, setProductName] = useState("");
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState("");

    const SearchProductName = () => {
        //api call
        axios.get("http://localhost:8081/product/product/byname/" + productName)
            .then(resp => setProduct(resp.data))
            .catch(error => {
                setProduct(null);
                setMessage(error.response.data)
            })
    }

    return (<div>
        <div class="flex-container">
            <div class="flex-item">
                <h1>Search Product Name</h1>
            </div>
            <button style={{ width: "100px" }} ><Link to="/" align="left">Home</Link></button>
        </div>

        <div className="container" align="center" style={{ paddingTop: '1px' }}>
            <div class="jumbotron" align="center">

                <div></div>

                <div className="form-group" class="col-md-6 mb-4" style={{ marginTop: '19px' }}>
                    <label > Product Name:</label>
                    <input type="text" name="productName" value={productName} className="form-control" placeholder="Enter Product Name" id="productName"
                        onChange={(event) => setProductName(event.target.value)} />
                </div>

                <button onClick={SearchProductName}>Search</button>
                {
                    product != null ? <div>
                        <h2>Product Details</h2>
                        <p>ProductId:{product.productId}</p>
                        <p>ProductName:{product.productName}</p>
                        <p>ProductPrice:{product.productPrice}</p>

                    </div>
                        : <h3>{message}</h3>
                }
            </div>
        </div>
    </div>)

}

export default SearchProductName;