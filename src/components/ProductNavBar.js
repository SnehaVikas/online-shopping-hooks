import React from 'react'
import './Style.css'

export const Navbar = () => {

    return (

        <div>

            <nav>

         <div className="logo">

            REvive

         </div>

         <input type="checkbox" id="click"/>

         <label htmlFor="click" className="menu-btn">

         <i className="fas fa-bars"></i>

         </label>

         <ul>

            <li><a className="active" href="/home">Home</a></li>

            <li><a href="/product/all">Product</a></li>

            <li><a href="#">About</a></li>

            <li><a href="#">Contact</a></li>

            <li><a href="#">Account</a></li>

         </ul>

      </nav>



        </div>

    )

}