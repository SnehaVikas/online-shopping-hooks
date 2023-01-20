import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import { Link } from 'react-router-dom';

function ProductAll() {
  const [products, setProducts] = useState([]);

  //Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    axios
      .get("http://localhost:8081/product/all")
      .then((resp) => setProducts(resp.data));
  }, []);

  return (<div>

    <div class="flex-container">
            <div class="flex-item">
                <h1>All Product</h1>
            </div>
            <button  style={{width:"100px" }} ><Link to="/" align="left">Home</Link></button>
        </div>
    <div className="product">
      {products.length > 0 && (
        <div className="card">
          {products.map((shop, index) => (
            <Card key={index} shop={shop} />
          ))}
        </div>
      )}
    </div>
    </div>
  )
}
export default ProductAll;
