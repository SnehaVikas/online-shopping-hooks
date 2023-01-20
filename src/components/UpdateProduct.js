import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function UpdateProduct() {

    const { pid } = useParams();



    const [pId, setPId] = useState("");

    const [pName, setPName] = useState("");

    const [pPrice, setPPrice] = useState("");



    const [pCategory, setPCategory] = useState("");

    const [formErrors, setFormErrors] = useState("");

    useEffect(() => {

        axios.get("http://localhost:8081/product/" + pid).then(resp => {

            setPId(resp.data.productId);

            setPName(resp.data.productName);

            setPPrice(resp.data.productPrice);



            setPCategory(resp.data.category);



        });

    }, [])



    const HandleSubmit = () => {



        let errors = {};





        if (!pId) {



            errors['pIdError'] = "Product Id is required."

        }

        if (!pName) {



            errors['pNameError'] = "Product Name is required."

        }

        if (!pName) {



            errors['pPriceError'] = "Product Price is required."

        }

        if (!pCategory) {



            errors['pCategoryError'] = "CategoryId is required."

        }





        setFormErrors(errors);





        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {









            const payload = {

                productId: pId,

                productName: pName,

                productPrice: pPrice,

                categoryDto: {

                    categoryId: pCategory



                }



            }



            axios.put("http://localhost:8081/product/product/update", payload).then(resp => alert("Product Updated"));



        }

    }



    return (

        <div>

            <div class="flex-container">

                <div class="flex-item">
                    <h1>Update Product</h1>
                </div>
                <button  style={{width:"100px" }} ><Link to="/admin/dashboard" align="left">Admin Home</Link></button>
            </div>
            <div className="container" class="jumbotron" align="center">
                <div className="form-group" class="col-8">
                    <label htmlFor="pId">Product Id</label>

                    <input type="text" name="pId" value={pId} className="form-control" id='pId'
                        onChange={(event) => setPId(event.target.value)} disabled></input>

                    {

                        formErrors.pIdError && <div style={{ color: "red" }}>{formErrors.pIdError}</div>

                    }

                </div>

                <div className="form-group" class="col-8">

                    <label htmlFor="pName">Product Name</label>

                    <input type="text" name="pName" value={pName} className="form-control" id='pName'
                    onChange={(event) => setPName(event.target.value)}></input>

                    {

                        formErrors.pNameError && <div style={{ color: "red" }}>{formErrors.pNameError}</div>

                    }

                </div>

                <div className="form-group" class="col-8">

                    <label htmlFor="pPrice">Product Price</label>

                    <input type="text" name="pPrice" value={pPrice} className="form-control" id='pName'
                    onChange={(event) => setPPrice(event.target.value)}></input>

                    {

                        formErrors.pPriceError && <div style={{ color: "red" }}>{formErrors.pPriceError}</div>

                    }

                </div>



                <div className="form-group" class="col-8">

                    <label htmlFor="pPrice">Category</label>

                    <input type="text" name="pCategory" value={pCategory} className="form-control" id='pCategory'
                    onChange={(event) => setPCategory(event.target.value)}></input>

                    {

                        formErrors.pCategoryError && <div style={{ color: "red" }}>{formErrors.pCategoryError}</div>

                    }

                </div>



                <button onClick={HandleSubmit}>Update</button>

            </div>



        </div>

    )

}



export default UpdateProduct;