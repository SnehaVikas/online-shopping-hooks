import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UpdateCustomer() {
    const { uid } = useParams();
    const [cUserId, setCUserId] = useState("");
    const [cUserName, setCUserName] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [cRole, setCRole] = useState("");
    const [cName, setCName] = useState("");
    const [cMobile, setCMobile] = useState("");
    const [cEmail, setCEmail] = useState("");
    const [cAddress, setCAddress] = useState("");
    const [formErrors, setFormErrors] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8081/customer/" + uid).then(resp => {
            setCUserId(resp.data.userId);
            setCUserName(resp.data.username);
            setCPassword(resp.data.password);
            setCRole(resp.data.role);
            setCName(resp.data.customerName);
            setCMobile(resp.data.mobile);
            setCAddress(resp.data.address);
            setCEmail(resp.data.email);
        });
    }, [])

    const updateCustomerSubmit = () => {

        let errors = {};

        if (!cPassword) {
            errors['cPasswordError'] = "Update your Password."
        }
        if (!cRole) {
            errors['cRoleError'] = "Update Your Current Role."
        }
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!cEmail.match(mailformat)) {
            errors['cEmailError'] = "Enter a valid Email."
        }
        if (!cName) {
            errors['cNameError'] = "Required field."
        }
        if (!cUserName) {
            errors['cUserNameError'] = "Required field."
        }
        if (!cAddress) {
            errors['cAddressError'] = "Required field."
        }


        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                userId: cUserId,
                username: cUserName,
                password: cPassword,
                role: cRole,
                customerName: cName,
                mobile: cMobile,
                email: cEmail,
                address: cAddress
            }

            axios.put("http://localhost:8081/customer/update", payload).then(resp => alert("Customer Updated"));
        }
    }
    return (
        <div>
            <div class="flex-container">
                <div class="flex-item">
                    <h1>Customer Update</h1>
              </div>
              <button  style={{width:"100px" }} ><Link to="/" align="left">Home</Link></button>
             </div>
            <div id="form">
                <div>
                    <label>User Id</label>
                    <input type="text" name="cUserId" value={cUserId} onChange={(event) => setCUserId(event.target.value)} disabled></input>
                </div>
                <div>
                    <label>User Name</label>
                    <input type="text" name="cUserName" value={cUserName} onChange={(event) => setCUserName(event.target.value)}></input>
                    {

                        formErrors.cUserNameError && <div style={{ color: "red" }}>{formErrors.cUserNameError} </div>
                    }

                </div>
                <div>
                    <label class="star">Password</label>
                    <input type="text" name="cPassword" value={cPassword} onChange={(event) => setCPassword(event.target.value)}></input>

                    {

                        formErrors.cPasswordError && <div style={{ color: "red" }}>{formErrors.cPasswordError} </div>
                    }
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" name="cRole" value={cRole} onChange={(event) => setCRole(event.target.value)}></input>

                    {

                        formErrors.cRoleError && <div style={{ color: "red" }}>{formErrors.cRoleError} </div>
                    }
                </div>
                <div>
                    <label>Customer Name</label>
                    <input type="text" name="cName" value={cName} onChange={(event) => setCName(event.target.value)}></input>
                    {

                        formErrors.cNameError && <div style={{ color: "red" }}>{formErrors.cNameError} </div>
                    }

                </div>
                <div>
                    <label class="star">Email</label>
                    <input type="text" name="cEmail" value={cEmail} onChange={(event) => setCEmail(event.target.value)}></input>
                    {

                        formErrors.cEmailError && <div style={{ color: "red" }}>{formErrors.cEmailError} </div>
                    }

                </div>
                <div>
                    <label class="star">Mobile</label>
                    <input type="text" name="cMobile" value={cMobile} onChange={(event) => setCMobile(event.target.value)}></input>
                    {

                        formErrors.cMobileError && <div style={{ color: "red" }}>{formErrors.cMobileError} </div>
                    }

                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="cAddress" value={cAddress} onChange={(event) => setCAddress(event.target.value)}></input>
                    {

                        formErrors.cAddressError && <div style={{ color: "red" }}>{formErrors.cAddressError} </div>
                    }

                </div>
                <button onClick={updateCustomerSubmit}>Update</button>


            </div>
        </div>
    )
}
export default UpdateCustomer;