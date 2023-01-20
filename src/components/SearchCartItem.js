import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchCartItem() {

    const [cartId, setCartId] = useState("");
    const [cart, setCart] = useState(null);
    const [message, setMessage] = useState("");
    //const [cartItems, setCartItems] = useState([]);

    const handleSubmit = () => {
        //api call
        axios.get("http://localhost:8081/cart/" + cartId)
            .then(resp => setCart(resp.data))
            .catch(error => {

                setCart(null);
                setMessage(error.response.data)

            })
    }

    return (<div>

        <h1 align="center">Search cartItems</h1>
        <div>
            <label>Enter cartId: </label>
            <input type="text" name="cartId" value={cartId}
                onChange={(event) => setCartId(event.target.value)}></input>

        </div>

        <button onClick={handleSubmit}>Search</button>
        {
            cart !== null ?
                <div>
                    <h2>Cart Details</h2>
                    <p>cartId: {cart.cartId}</p>
                    <p>cartTotal: {cart.cartTotal}</p>
                    <p>count: {cart.count}</p>
                    <p>cartItems:{cart.cartItems.length}</p>

                    {
                        cart.cartItems.length > 0 ?
                            cart.cartItems.map(c =>
                                <div key={c.cartItems.cartItemId}>
                                    <p>CartItemId:{c.cartItems.cartItemId}</p>
                                    <p>Quantity:{c.cartItems.quantity}</p>
                                    <p>ItemTotal:{c.cartItems.itemTotal}</p>
                                    <p>ProductId:{c.cartItems.productDto.productId}</p>
                                </div>)
                            :
                            <h2>No Items Available</h2>

                    }



                </div>
                : <h3>{message}</h3>

        }


    </div>)
}


export default SearchCartItem; 
