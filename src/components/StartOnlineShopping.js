import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Start(){
    return(

        <div>
            <Link to="/customer/login">
            <img src="/Images/Logo1.png" alt="logo image" width="1400px" height="720px"/>
            </Link>
        </div>
    )
}
export default Start;