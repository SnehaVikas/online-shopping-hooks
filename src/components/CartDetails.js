import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddOrderItem from './AddOrderItem';

function CartDetails() {

    const [cart, setCart] = useState(null);
    const { cid } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8081/cart/" + cid).then(resp => setCart(resp.data));
    }, [])

    return (
        <div>

            <div class="flex-container">
                <div class="flex-item">
                    <h1>CART</h1>
                </div>
                <button style={{ width: "100px" }} ><Link to="/product/fetch/:productId" align="left"></Link>back</button>
            </div>
            {
                cart !== null &&
                <div align="center">
                    <h1> CartId:{cart.cartId}</h1>
                    <table border={1} align="center" className="table table-striped" style={{ width: '50%' }}>
                        <thead>
                            <tr>

                                {/* <th>cartId</th> */}
                                <th>CartItemId</th>
                                <th>Product</th>
                                <th>quantity</th>
                                <th>ItemTotal</th>
                                <th>ProductName</th>
                                <th>ProductPrice</th>
                            </tr>
                        </thead>


                        {/* {cart.cartId} */}
                        <tbody>
                            {
                                cart.cartItems.length > 0 ?
                                    cart.cartItems.map(c =>
                                        <tr>
                                            {/* <td></td> */}
                                            <td>{c.cartItemId}</td>
                                            <td><img class="img-fluid" src="/Images/package.png" alt="product-icon" /></td>
                                            <td>{c.quantity}</td>
                                            <td>{c.itemTotal}</td>
                                            <td>{c.productDto.productName}</td>
                                            <td>{c.productDto.productPrice}</td>


                                        </tr>) :
                                    <h2>No Items Available</h2>
                            }
                        </tbody>
                    </table>
                    <button className="btn2 btn-secondary"><Link to="/order/place">PLACE ORDER</Link></button><br></br>

                </div>
            }




        </div>)
}
export default CartDetails;