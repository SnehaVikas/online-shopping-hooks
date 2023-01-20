import React from 'react';
import {useNavigate} from 'react-router-dom';

function CustomerLogout(){

    const customer = JSON.parse(localStorage.getItem("mytoken"));
    const navigate = useNavigate();

    const handleLogout = () =>{
        if(customer !== null){
            localStorage.removeItem("mytoken");
            alert("Sucessfully customer logout");
            navigate("/start");
        }
    }

    return(<div>
        <button onClick={handleLogout} class="btn btn-secondary">Logout</button>
        </div>)

}
export default CustomerLogout;