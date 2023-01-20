import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function CartDetails(){

    const[cart,setCart] = useState(null);
    const{cid} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8081/cart/" +cid).then(resp =>setCart(resp.data));
    },[])

    return (<div>


        {
            cart !== null &&
            <div>
                <p>CartId:{cart.cartId}</p>
                {
                    cart.cartItems.length>0 ?
                    cart.cartItems.map(c=>
                        <div>
                                <p>CartItemId:{c.cartItemId}</p>
                                <p>Quantity:{c.quantity}</p>
                                <p>ItemTotal:{c.itemTotal}</p>
                                <p>ProductId:{c.productDto.productId}</p>
                                {/* <Link to="/cart/all">Back to Cart All</Link><br></br> */}
                        </div>):
                        <h2>No Items Available</h2>

                }
               </div>
        }

        </div>)
}
export default CartDetails;