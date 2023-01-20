import React, { useState } from 'react';



import axios from 'axios';



import { Link } from 'react-router-dom';



function SearchProductByCategory() {

    const [category, setCategory] = useState("");

    const [products, setProducts] = useState([]);

    const [message, setMessge] = useState("");

    const handleSubmit = () => {

        //api call



        axios.get("http://localhost:8081/product/categoryname/" + category)



            .then(resp => setProducts(resp.data))



            .catch(error => {



                setProducts([]);



                setMessge(error.response.data)

                alert("No item with category");

            })



    }

    return (<div className='container'>

        {/* <br /><br /><br /> */}



        <h1>Search Product By Category</h1>



        <div>

            {/* /<br /><br /> */}



            <label id="cat1">Enter Category</label>



            <input type="text" id="cat" name="category" value={category}







                onChange={(event) => setCategory(event.target.value)} placeholder="Enter Product Category Name" /><br />



        </div>



        {/* <br /> */}



        <button onClick={handleSubmit}>Search</button>



        {



            products.map(p => <div>





                <h2>Product Details</h2>



                <p id='y'>ProductId: {p.productId}</p>

                <p id='y'>ProductName: {p.productName}</p>

                <p id='y'>ProductPrice: {p.productPrice}</p>



                <p id='y'>Category: {p.category.categoryName}</p>





            </div>

            )

        }

    </div>)

}

export default SearchProductByCategory;