import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CustomerLogin() {

    const [customerName, setCustomerName] = useState("");

    const [password, setPassword] = useState("");

    const [customer, setCustomer] = useState(null);

    const [msg, setMessage] = useState("");
    const [formErrors,setFormErrors]=useState({});

    const navigate = useNavigate();



    const handleSubmit = () => {

        let errors={};
        if(!customerName){
            errors['customerNameError']="Customer Name is required"
        }
        if(!password){
            errors['passwordError']="Password is required"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if(noErrors){
        const payload = {

            customerName: customerName,

            password: password

        }

        axios.post("http://localhost:8081/auth/customer/login", payload).then(resp => {

            //setUser(resp.data);
            const obj = {
                userId: resp.data.userId,
                username: resp.data.username,

            }

            localStorage.setItem("mytoken", JSON.stringify(obj));

            alert("Login success..");
            if(resp.data.role === 'customer'){
                navigate("/");

            }

        })

            .catch(error => {

                alert("login failed")

                setMessage(error.response.data);

            })

        }

    }

    return (
        <section>
            <div className="register1" class="bg-img1" style={{ paddingTop: '80px' }} >

                <div class="jumbotron1" style={{ width: '35%' }}>

                    <h1 style={{ paddingLeft: '80px' }}>Customer Login</h1>

                    <div className='col-1'>{

                        msg

                    }
                        <form id='form' className='flex flex-col'>

                            <input type="text" style={{ marginTop: '5%' }} name="customerName" value={customerName} className="form-control" placeholder='Enter Customer Name' id="customerName"

                                onChange={(event) => setCustomerName(event.target.value.trim())} />

                                {
                                    formErrors.customerNameError && <div style={{color:"red"}}>{formErrors.customerNameError}</div>
                                }

                            <input type="password" style={{ marginTop: '5%' }} name="password" value={password} className="form-control" placeholder='Password' id="password"

                                onChange={(event) => setPassword(event.target.value.trim())} />
                                {
                                    formErrors.passwordError && <div style={{color:"red"}}>{formErrors.passwordError}</div>
                                }

                        </form>

                        <button onClick={handleSubmit} className="btn1 btn-primary">Login</button><br></br>
                        <h8 align="center">Don't have an account?</h8>
                        <Link to="/customer/register"><label>register</label></Link>

                    </div>

                </div>

            </div>

        </section>

    )



}

export default CustomerLogin;
