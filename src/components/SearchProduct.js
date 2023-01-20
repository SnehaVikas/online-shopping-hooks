import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetailsAction } from '../store/actions/ProductActions';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SearchProduct() {
    const { productId } = useParams();
    const [cQuantity, setCQuantity] = useState("");
    const [cart, setCart] = useState(null);
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const customer = JSON.parse(localStorage.getItem("mytoken"));

    const product = useSelector(state => state.productReducer.product);

    useEffect(() => {
        dispatch(fetchProductDetailsAction(productId))
    }, [])

    const handleSubmit = () => {

        axios.get(`http://localhost:8081/customer/cart/${customer.userId}`).then(resp => {
            const cartload = {
                cartId: resp.data.cartId,
                productId: productId,
                quantity: cQuantity
            }

            //call api to add the product in cart

            axios.post("http://localhost:8081/cart/additem", cartload).then(resp => {

                alert("Product is add in cart  with id: " + resp.data.cartId);
                navigate("/cart/details/" + resp.data.cartId)
            }
            );

        })

    }
    return ( <div>
        <div class="flex-container">
        <div class="flex-item">
            <h1>Product</h1>
        </div>
        <button  style={{width:"100px" }} ><Link to="/all/product" align="left">All Product</Link></button>
    </div>

        <div align="center" className='SearchProducts'>

            <div className="row" class="col d-flex justify-content-center">
                <div className="card1 alignn" style={{ width: "500px" }}>

                    <div class="card1-body">
                        {
                            product !== null && <div>
                                <img class="img-fluid" src="/Images/download.jpg" alt="product-icon" />
                                <p>{product.productName}</p>
                                <p>{product.productPrice}</p>


                            </div>
                        }

                        <div className="form-group">
                            <label htmlFor='cQuantity'>Quantity</label>
                            <input type="text" name="cQuantity" value={cQuantity} className="form-control" id="cQuantity"
                                onChange={(event) => setCQuantity(event.target.value)} />
                        </div>


                        <button onClick={handleSubmit} className="btn btn-secondary">Add to cart</button>

                    </div>
                </div>
            </div>
            </div>
        </div>)
}

export default SearchProduct;