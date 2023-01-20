import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCartAllActions } from "../store/actions/CartAllActions";
import { Link } from 'react-router-dom';

function AllCartRedux() {

    const cart = useSelector(state => state.cartAllReducer.Carts);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAllCartAllActions())

    }, [])



    return (<div style={{ width: "70%", padding: "16%" }}>

        {

            <table className="table table-striped">

                <thead className="thead-dark">

                    <tr>

                        <th>CartId</th>

                        <th>CartTotal</th>

                        <th>Count</th>

                    </tr>

                </thead>

                <tbody>



                    {

                        cart.map(c => <tr key={c.cartId}>

                            <td> {c.cartId}</td>

                            <td> {c.cartTotal}</td>

                            <td>  {c.count}</td>

                             <Link to={`/cart/details/redux/${c.cartId}`}>View</Link> 
                            

                        </tr>)



                    }

                </tbody>



            </table>

        }

    </div>)



}

export default AllCartRedux;