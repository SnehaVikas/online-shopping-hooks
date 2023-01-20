
import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


function AddCategory() {
    const [cId, setCId] = useState("");
    const [cName, setCName] = useState("");
   const [formErrors, setFormErrors] = useState({})

    const handleSubmit = () => {
        let errors = {};
        if (!cId) {
            errors['cIdError'] = "Customer User Name is required."
        }
        if (!cName) {
            errors['cNameError'] = "Customer Password is required."
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors){
            const categoryload = {
                categoryId: cId,
                categoryName: cName,
            }

            axios.post("http://localhost:8081/category/add ", categoryload).then(resp =>
                alert("ategory is saved with id: " + resp.data.categoryId));
        }
    }
    return (<div>
        <div class="flex-container">
            <div class="flex-item">
                <h1>Add Category</h1>
            </div>
            <button  style={{width:"100px" }} ><Link to="/admin/dashboard" align="left">Admin Home</Link></button>
        </div>


        <div className="container" align="center" style={{ paddingTop: '1px' }}>
           <div class="jumbotron"  align="center">


                    <div className="form-group" class="col-md-6 mb-4" style={{ marginTop: '19px' }}>
                        <label htmlFor='cId'> Category Id</label>
                        <input type="text" name="cId" value={cId} className="form-control" placeholder="Enter Category Id" id="cId"
                            onChange={(event) => setCId(event.target.value)} />
                       {
                        formErrors.cIdError && <div style={{ color: "red" }}>{formErrors.cIdError}</div>
                    }
                    </div>
                    <div className="form-group" class="col-md-6 mb-4" style={{ marginTop: '19px' }}>
                        <label htmlFor='cName'> Category Name</label>
                        <input type="text" name="cName" value={cName} className="form-control" placeholder="Enter Category Name" id="cName"
                            onChange={(event) => setCName(event.target.value)} />

{
                        formErrors.cNameError && <div style={{ color: "red" }}>{formErrors.cNameError}</div>
                    }

                    </div>


                    <button onClick={handleSubmit} className="btn btn-primary" >SAVE</button>
                </div>

            </div>

   </div>
    )
}
export default AddCategory;
