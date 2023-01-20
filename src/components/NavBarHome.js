import React from 'react';

import { FaBars, FaTimes } from '@react-icons/all-files/fa/FaBars';

import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';



export const Nav = styled.nav`



background: #343a40;



height: 85px;



display: flex;



justify-content: space-between;



padding: 0.2rem calc((100vw - 1000px) / 2);



z-index: 10g;



/* Third Nav */



/* justify-content: flex-start; */



`;




/* link name */
export const NavLink = styled(Link)`



color: #f9f2ea;;



display: flex;



align-items: center;



text-decoration: none;



padding: 0 1rem;



height: 100%;



cursor: pointer;



&.active {



    color: #0078900;



}



`;


export const Bars = styled(FaBars)`

display: none;

color: #d95fa8;

@media screen and (max-width: 768px) {

    display: block;

    position: absolute;

    top: 0;

    right: 0;

    transform: translate(-100%, 75%);

    font-size: 1.8rem;

    cursor: pointer;

}

`;

export const NavMenu = styled.div`
display: flex;

align-items: center;

margin-right: -2224px;

/* Second Nav */

/* margin-right: 24px; */

/* Third Nav */

/* width: 100vw;

white-space: nowrap; */
// }

@media screen and (max-width: 768px) {

    display: none;

}

`;

export const NavBtn = styled.nav`

display: flex;

align-items: center;

margin-right: 0px;



/* Third Nav */



/* justify-content: flex-end;



width: 100vw; */



@media screen and (max-width: 768px) {



    display: none;



}



//`;


/* button*/
export const NavBtnLink = styled(Link)`



border-radius: 4px;



background: #f9f2ea;



padding: 5px 5px;



color: #4C4F5C ;



outline: none;



border: none;



cursor: pointer;



transition: all 0.2s ease-in-out;



text-decoration: none;



/* Second Nav */



margin-left: 2px;



&:hover {



    transition: all 0.2s ease-in-out;



    background: #fff;



    color: #808080;



}



`;
