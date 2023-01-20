import React from 'react';
import { MdPreview } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import CustomerLogout from "./CustomerLogout";
import {

  Nav,

  NavLink,

  Bars,

  NavMenu,

  NavBtn,

  NavBtnLink,

} from './NavBarHome';
import UpdateCustomer from './UpdateCustomer';


function Header() {
  const user = JSON.parse(localStorage.getItem("mytoken"));

  const navigate = useNavigate();

  const handleLogout = () => {

    if (user !== null) {

      localStorage.removeItem("mytoken");

      alert("logout");

      navigate("/start");

    }

  };

  return (

    <>

      <Nav>

        <Bars />

        <NavMenu>

          <img src="/Images/Logo1.png" alt="logo image" width="150px" height="60px" />

          <NavLink to='/' activeStyle>

            HOME

          </NavLink>

          <NavLink to='/all/product' activeStyle>

            PRODUCT

          </NavLink>


          <NavLink to='/all/product' activeStyle>

            WOMEN

          </NavLink>

          <NavLink to='/all/product' activeStyle>

            MEN

          </NavLink>

          <NavLink to='/all/product' activeStyle>

            KIDS

          </NavLink>
s
          {/* Second Nav */}

          <NavBtn>
            <form action="/search" class="js-search-input-form search-input-form" method="get">
              <input id="search" type="search" name="q" placeholder="Search" value="search" class="search-input js-search-input" />
            </form>
            <NavBtnLink to='/product/bycategory'>SEARCH</NavBtnLink>

            {/* <form class="example">

              <input type="text" placeholder="Search Location" name="categoryName" value={categoryName} onChange={(event) => setLocation(event.target.value)} />

              <button type="submit" onClick={handleButton}><i class="fa fa-search"></i></button>

            </form> */}
          </NavBtn>

          {/* <NavBtn>
            <NavLink to='/cart/details/' activeStyle>
              <img src="/imagesProject/cartblack.png" alt="logo image" width="60px" height="35px" />
            </NavLink>
          </NavBtn> */}
         <NavBtn>
        <NavLink to='/customer/update' activeStyle>
              <img src="/Images/2601828.png" alt="logo image" width="60px" height="50px" />
            </NavLink>
        </NavBtn>

        </NavMenu>

        <NavBtn>
          <CustomerLogout />
        </NavBtn>

      </Nav>

    </>

  );

}

export default Header;
