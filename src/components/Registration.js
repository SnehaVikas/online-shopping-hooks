import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
function Registration() {
    const [cUsername, setCUsername] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [cName, setCName] = useState("");
    const [cMobile, setCMobile] = useState("");
    const [cEmail, setCEmail] = useState("");
    const [cAddress, setCAddress] = useState("");
    const [formErrors, setFormErrors] = useState({})



    const handleSubmit = () => {

        let errors = {};
        if (!cUsername) {
            errors['cUsernameError'] = "Customer User Name is required."
        }
        if (!cPassword) {
            errors['cPasswordError'] = "Customer Password is required."
        }
        if (!cName) {
            errors['cNameError'] = "Customer  Name is required."
        }
        if (!cMobile) {
            errors['cMobileError'] = "Customer Mobile-No is required."
        }
        if (!cEmail) {
            errors['cEmailError'] = "Customer Email is required."
        }
        if (!cAddress) {
            errors['cAddressError'] = "Customer Address is required."
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {
                username: cUsername,
                password: cPassword,
                customerName: cName,
                mobile: cMobile,
                email: cEmail,
                address: cAddress
            }
            axios.post("http://localhost:8081/customer/save", payload).then(resp =>
                alert("Registration is Successful "));
        }

    }
    return (<div>

        <div class="flex-container">
                <div class="flex-item">
                <h2>Customer Registration</h2>
                </div>
                <button  style={{width:"100px" }} ><Link to="/customer/login">GO TO LOGIN</Link></button>
            </div>
        <div className="container" align="center" style={{ paddingTop: '1px' }}>
            <div class="jumbtron" align="center">
                <div className="form-group" class="col-md-6 " style={{ marginTop: '19px' }}>
                    <label htmlFor='cUsername'> UserName</label>
                    <input type="text" name="cUsername" value={cUsername} className="form-control" placeholder="Enter Your UserName" id="cUsername"
                        onChange={(event) => setCUsername(event.target.value)} />
                    {
                        formErrors.cUsernameError && <div style={{ color: "red" }}>{formErrors.cUsernameError}</div>
                    }
                </div>
                <div className="form-group" class="col-md-6 ">
                    <label htmlFor='cPassword'> Password</label>
                    <input type="password" name="cPassword" value={cPassword} className="form-control" placeholder="Enter Your Password" id="cPassword"
                        onChange={(event) => setCPassword(event.target.value)} />
                    {
                        formErrors.cPasswordError && <div style={{ color: "red" }}>{formErrors.cPasswordError}</div>
                    }

                </div>

                <div className="form-group" class="col-md-6 ">
                    <label htmlFor='cName'>Customer Name</label>
                    <input type="text" name="cName" value={cName} className="form-control" placeholder="Enter Your Name" id="cName"
                        onChange={(event) => setCName(event.target.value)} />
                    {
                        formErrors.cNameError && <div style={{ color: "red" }}>{formErrors.cNameError}</div>
                    }

                </div>
                <div className="form-group" class="col-md-6 ">
                    <label htmlFor='cMobile'>Customer Mobile</label>
                    <input type="text" name="cMobile" value={cMobile} className="form-control" placeholder="Enter Your Mobile_no" id="cMobile"
                        onChange={(event) => setCMobile(event.target.value)} />
                    {
                        formErrors.cMobileError && <div style={{ color: "red" }}>{formErrors.cMobileError}</div>
                    }

                </div>
                <div className="form-group" class="col-md-6 ">
                    <label htmlFor='cEmail'>Customer Email</label>
                    <input type="text" name="cEmail" value={cEmail} className="form-control" placeholder=" Your Email @gmail.com" id="cEmail"
                        onChange={(event) => setCEmail(event.target.value)} />
                    {
                        formErrors.cEmailError && <div style={{ color: "red" }}>{formErrors.cEmailError}</div>
                    }

                </div>

                <div className="form-group" class="col-md-6 ">
                    <label htmlFor='cAddress'>Customer Address</label>
                    <input type="text" name="cAddress" value={cAddress} className="form-control" placeholder="Enter Your Address" id="cAddress"
                        onChange={(event) => setCAddress(event.target.value)} />
                    {
                        formErrors.cAddressError && <div style={{ color: "red" }}>{formErrors.cAddressError}</div>
                    }

                </div>




                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>

            </div>
        </div>


</div>
    )
}
export default Registration;
