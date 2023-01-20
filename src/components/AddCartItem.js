import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function AddCartItem() {

    const [cId, setCId] = useState("");
    const [cPId, setCPId] = useState("");
    const [cQuantity, setCQuantity] = useState("");

    const handleSubmit = () => {
    
        const cartload = {
            cartId: cId,
            productId: cPId,
            quantity: cQuantity
        }

        //call api to add the product in cart

        axios.post("http://localhost:8081/cart/additem", cartload).then(resp =>
            alert("Product is add in cart  with id: " + resp.data.cartId));

    }

    return (<div className="container">

        
            <div className="form-group">
                <label htmlFor='cCart'>Cart Id </label>
                <input type="text" name="cId" value={cId} className="form-control" id="cId"
                   onChange={(event) => setCId(event.target.value)} />

            </div>

            <div className="form-group">

                <label htmlFor='cProductId'>Product Id </label>
                <input type="text" name="cPId" value={cPId} className="form-control" id="cPId"
                onChange={(event) => setCPId(event.target.value)} />

            </div>

            <div className="form-group">

                <label htmlFor='cQuantity'>Quantity </label>
                <input type="text" name="cQuantity" value={cQuantity} className="form-control" id="cQuantity"
                onChange={(event) => setCQuantity(event.target.value)} />

            </div>

            <button onClick={handleSubmit} className="btn btn-primary">Add</button>

            <div>
                <Link to="/">Back to Home</Link><br></br>
            </div>
            
        </div>
        

    )

}

export default AddCartItem;