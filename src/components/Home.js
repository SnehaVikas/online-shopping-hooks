import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import MainHome from './MainHome';

function Home(){
    return(

        <div>
            <Header/>
            <MainHome/>
            <Footer/>
        </div>
    )
}
export default Home;