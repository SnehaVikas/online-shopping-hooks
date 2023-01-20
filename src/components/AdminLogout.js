import React from 'react';
import {useNavigate} from 'react-router-dom';

function AdminLogout(){

    const admin = JSON.parse(localStorage.getItem("mytoken"));
    const navigate = useNavigate();

    const handleLogout = () =>{
        if(admin !== null){
            localStorage.removeItem("mytoken");
            alert("Sucessfully admin logout");
            navigate("/admin/login");
        }
    }

    return(<div>
        <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
        </div>)

}
export default AdminLogout;