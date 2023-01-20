import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AllCartItem() {
    const [carts, setCarts] = useState([]);

    
    useEffect(() => {

        axios.get("http://localhost:8081/cart/all").then(resp => setCarts(resp.data));

    }, [])

    //similar to  componentDidMount and  componentDidUpdate

    return (
        <div>
            <h2 align="center">List of cartItems</h2>
            {
                <table align="center">
                    <thead>
                        <tr>
                            <th>CartId</th>
                            <th>CartTotal</th>
                            <th>Count</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map(c => 
                                <tr key={c.cartId}>
                                <td>{c.cartId}</td>
                                <td>{c.cartTotal}</td>
                                <td>{c.count}</td>
                                <Link to={`/cart/details/${c.cartId}`}>View</Link>

                            </tr>)
                        }
                    </tbody>


                </table>
            }
            {/* <button onClick={handleSubmit} className="btn2 btn-primary">PLACE ORDER</button><br></br> */}
        </div>
    )
}


export default AllCartItem;