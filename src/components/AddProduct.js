import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';




function AddProduct() {

    const [pName, setPName] = useState("");

    const [pPrice, setPPrice] = useState("");



    const [pCategory, setPCategory] = useState("");

    const [formErrors, setFormErrors] = useState("");



    const handleSubmit = () => {

        let errors = {};

        if (!pName) {

            errors['pNameError'] = "Product Name is required."

        }

        if (!pPrice) {

            errors['pPriceError'] = "Product Price is required."

        }

        if (!pCategory) {

            errors['pCategoryError'] = "CategoryId is required."

        }






        setFormErrors(errors);





        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {





            const payload = {

                productName: pName,

                productPrice: pPrice,

                categoryDto: {

                    categoryId: pCategory

                }





            }



            axios.post(`http://localhost:8081/product/${pCategory}/save`, payload).then(resp =>

                alert("Product is saved with id: " + resp.data.productId));

        }

    }





    return (<div>

        <div class="flex-container">
            <div class="flex-item">
                <h1>View Product</h1>
            </div>
            <button  style={{width:"100px" }} ><Link to="/admin/dashboard" align="left">Admin Home</Link></button>
        </div>
        <div className="container" class="jumbotron" align="center">

            {/* <div class="flex-container">
                <div class="flex-item">Product</div>
            </div> */}
            <div class="row" style={{ justifyContent: 'center' }}>
                <div className="form-group" class="col-8">
                    <label htmlFor="pName">Product Name</label>

                    <input type="text" name="pName" value={pName} className="form-control" id='pName'
                        onChange={(event) => setPName(event.target.value)} />

                    {

                        formErrors.pNameError && <div style={{ color: "red" }}>{formErrors.pNameError}</div>

                    }

                </div>

                <div className="form-group" class="col-8">

                    <label htmlFor="pPrice">Product Price</label>

                    <input type="text" name="pPrice" value={pPrice} className="form-control" id='pPrice'
                        onChange={(event) => setPPrice(event.target.value)}></input>

                    {

                        formErrors.pPriceError && <div style={{ color: "red" }}>{formErrors.pPriceError}</div>

                    }

                </div>



                <div className="form-group" class="col-8">

                    <label htmlFor="pCategory">Category</label>

                    <input type="text" name="pCategory" value={pCategory} className="form-control" id='pCategory'
                        onChange={(event) => setPCategory(event.target.value)}></input>

                    {

                        formErrors.pCategoryError && <div style={{ color: "red" }}>{formErrors.pCategoryError}</div>

                    }



                </div>

                <button align="center" onClick={handleSubmit}>Save</button>

            </div>
        </div>

    </div>)

}



export default AddProduct;
