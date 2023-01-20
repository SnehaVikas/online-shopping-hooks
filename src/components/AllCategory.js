import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllCategory() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/category/all").then(resp => setCategory(resp.data));
    }, [])
    return (
        <div>

            <div class="flex-container">
                <div class="flex-item">
                    <h1>categories</h1>

                </div>
                <button  style={{width:"100px" }} ><Link to="/admin/dashboard" align="left">Admin Home</Link></button>
            </div>
            {/* <h2 align="center">List Of Category </h2> */}

            <table align="center">


                <thead>
                    <tr>
                        <th>Category Id </th>
                        <th>Category Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(c => <tr key={c.categoryId}>
                            <td>{c.categoryId}</td>
                            <td>{c.categoryName}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>)

}
export default AllCategory;
