import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AdminLogin() {

    const [adminUsername, setAdminUsername] = useState("");

    const [adminPassword, setAdminPassword] = useState("");

    const [admin, setAdmin] = useState(null);

    const [msg, setMessage] = useState("");

    const [formErrors,setFormErrors]=useState({});
    const navigate = useNavigate();



    const handleSubmit = () => {

        let errors={};
        if(!adminUsername){
            errors['adminUsernameError']="Admin Name is required"
        }
        if(!adminPassword){
            errors['adminPasswordError']="Password is required"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if(noErrors){
        const payload = {

            adminUsername: adminUsername,

            adminPassword: adminPassword

        }

        axios.post("http://localhost:8081/authen/admin/login", payload).then(resp => {

            //setUser(resp.data);
            const obj = {
                adminId: resp.data.adminId,
                adminName: resp.data.adminName,
                adminEmail: resp.data.adminEmail,
            }

            localStorage.setItem("mytoken", JSON.stringify(obj));

            alert("Admin Login successful");

                navigate("/admin/dashboard");




        })

            .catch(error => {

                alert(" Admin login failed")

                setMessage(error.response.data);

            })
        }

    }

    return (

        <section>
            <div className="register" class="bg-img" style={{ paddingTop: '30px' }} >

                <div class="jumbotron" style={{ width: '35%' }}>

                    <h3 style={{ paddingLeft: '80px' }}>Admin Login</h3>

                    <div className='col-1'>{

                        msg

                    }
                        <form id='form' className='flex flex-col'>

                            <input type="text" style={{ marginTop: '5%' }} name="adminUsername" value={adminUsername} className="form-control" placeholder='Enter Admin Name' id="adminUsername"

                                onChange={(event) => setAdminUsername(event.target.value.trim())} />

                            {
                                formErrors.adminUsernameError && <div style={{ color: "red" }}>{formErrors.adminUsernameError}</div>
                            }

                            <input type="password" style={{ marginTop: '5%' }} name="adminPassword" value={adminPassword} className="form-control" placeholder='Password' id="adminPassword"

                                onChange={(event) => setAdminPassword(event.target.value.trim())} />
                                {
                                    formErrors.adminPasswordError && <div style={{color:"red"}}>{formErrors.adminPasswordError}</div>
                                }

                        </form>
                        <div>
                        <button onClick={handleSubmit} className="btn btn-secondary">Login</button><br></br>
                        {/* <Link to="/Employee/add"><label>Don't have an account? register</label></Link> */}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )



}

export default AdminLogin;
