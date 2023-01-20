import { useState } from "react"

import axios from "axios";

import { Link } from "react-router-dom";



function DeleteProduct() {

    const [product, setProduct] = useState(null);

    const [productId, setProductId] = useState("");



    const [message, setMessage] = useState("");

    const [formErrors, setFormErrors] = useState("");



    const handleSubmit = () => {



        let errors = {};





        if (!productId) {



            errors['productIdError'] = "Product Id is required."

        }





        setFormErrors(errors);





        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {





            axios.get("http://localhost:8081/product/" + productId)

                .then(resp => setProduct(resp.data))

                .catch(error => {

                    setProduct(null)

                    setMessage(error.response.data)

                })

        }

    }

    function DeleteProduct(id) {



        axios.delete(`http://localhost:8081/product/product/${id}`)

            .then(resp => {

                alert("Product deleted !!");

                handleSubmit();

            })



    }





    return (
        <div>


            <div class="flex-container">
                <div class="flex-item">Search product By Id</div>
                <button  style={{width:"100px" }} ><Link to="/admin/dashboard" align="left">Admin Home</Link></button>
            </div>

            <div className="container" class="jumbotron" align="center">
                <div class="row" style={{ justifyContent: 'center' }}>
                    <div className="form-group" class="col-8">
                        <label htmlFor="pName">Enter ProductId</label>

                        <input type="text" name="productId" value={productId} className="form-control" id='productId'
                            onChange={(event) => setProductId(event.target.value)} required />

                        {

                            formErrors.productIdError && <div style={{ color: "red" }}>{formErrors.productIdError}</div>

                        }

                        <button onClick={handleSubmit}> Search</button>
                    </div>

                    <div></div>

                    <div>

                        {

                            product !== null ?

                                <table className="table table-striped">

                                    <thead className="thead-dark">



                                    </thead>




                                    <tr>



                                        <td>{product.productId}</td>

                                        <td>{product.productName}</td>

                                        <td>{product.productPrice}</td>
                                        <td><button onClick={() => DeleteProduct(product.productId)}>Delete</button></td>

                                    </tr>




                                </table>

                                : <h2>{message}</h2>

                        }

                    </div>
                </div>
            </div>
        </div>);

}

export default DeleteProduct;
