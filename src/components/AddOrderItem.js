import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function AddOrderItem() {

    const customer = JSON.parse(localStorage.getItem("mytoken"));

    const [oPMode, setOPMode] = useState("");
    const [oCart, setOCart] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8081/customer/cart/"+customer.userId).then(resp => setOCart(resp.data));
    }, [])

    const handleSubmit = () => {

        const orderload = {

            // cartId: oCart.cartId,



                paymentMode: oPMode,



        }



        //call api to add the product in cart

        axios.post("http://localhost:8081/placeorder/"+oCart.cartId, orderload).then(resp =>

            alert("Product is add in order with id: " + resp.data.orderId));

    }

    return (

        <div>


            <div className="form-group">

                <label htmlFor='oPMode'>Payment Mode</label>

                <input type="text" name="oPMode" value={oPMode} className="form-control" id="oPMode"

                    onChange={(event) => setOPMode(event.target.value)} />

            </div>

            <button onClick={handleSubmit} className="btn btn-primary">Place Order</button>

        </div >

    )

}

export default AddOrderItem;
