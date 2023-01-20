import logo from './logo.svg';
import './CssStyle/MainHomeC.css';
import './CssStyle/AdminLogin.css';
import './CssStyle/AdminDashboard.css';
import './App.css';
import './CssStyle/AllProduct.css';
import './CssStyle/CartDetails.css';
import './CssStyle/AllCustomer.css';
import './CssStyle/SearchProduct.css';
import './CssStyle/AllForm.css';
import './CssStyle/CustomerLogin.css';
import './CssStyle/Footer.css';
import './Style.css';

import { IconName } from "react-icons/fa";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddCartItem from './components/AddCartItem';
import AllCartItem from './components/AllCartItem';
import CartDetails from './components/CartDetails';
import SearchCartItem from './components/SearchCartItem';
import Home from './components/Home';
import CustomerDashboard from './components/CustomerDashboard';
import CustomerLogin from './components/CustomerLogin';
import CustomerLogout from './components/CustomerLogout';
import AdminLogout from './components/AdminLogout';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import Header from './components/Header';
import AllCartRedux from './components/AllCartRedux';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import SearchProductName from './components/SearchProductName';
import SearchProduct from './components/SearchProduct';
import AllCustomer from './components/AllCustomer';
import DeleteProduct from './components/DeleteProduct';
import SearchProductByCategory from './components/SearchProductByCategory';
import AddOrderItem from './components/AddOrderItem';
import ProductAll from './components/ProductAll';
import Card from './components/Card';
import Footer from './components/Footer';
import MainHome from './components/MainHome';
import Start from './components/StartOnlineShopping';
import AddCategory from './components/AddCategory';
import UpdateCustomer from './components/UpdateCustomer';
import AllCategory from './components/AllCategory';
import Registration from './components/Registration';


function App() {
  return (
    //<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/additem" element={<AddCartItem />}/>
        <Route path="/cart/all" element={<AllCartItem/>}/>
        <Route path="/cart/details/:cid" element={<CartDetails/>}/>
        <Route path="/cart/search" element={<SearchCartItem/>}/>
        <Route path="/customer/login" element={<CustomerLogin/>}/>
        <Route path="/product/delete" element={<DeleteProduct />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard/>}/>
        <Route path="/customer/logout" element={<CustomerLogout/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/customer/all" element={<AllCustomer/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/logout" element={<AdminLogout/>}/>
        <Route path="/home/header" element={<Header/>}/>
        <Route path="/AllCartRedux" element={<AllCartRedux/>}/>
        <Route path="/product/all" element={<AllProducts />} />
      <Route path="/product/add" element={<AddProduct />} />
      <Route path="/product/update/:pid" element={<UpdateProduct />} />
      <Route path="/product/search/name" element={<SearchProductName />} />
      <Route path ="/product/fetch/:productId" element={<SearchProduct/>}/>
      <Route path ="/product/bycategory" element={<SearchProductByCategory/>}/>
      <Route path ="/order/place" element={<AddOrderItem/>}/>
      <Route path ="/all/product" element={<ProductAll/>}/>
      <Route path ="/product/card" element={<Card/>}/>
      <Route path ="/footer" element={<Footer/>}/>
      <Route path ="/main/home" element={<MainHome/>}/>
      <Route path ="/start" element={<Start/>}/>
      <Route path ="/customer/update" element={<UpdateCustomer/>}/>
      <Route path ="/customer/register" element={<Registration/>}/>
      <Route path ="/add/category" element={<AddCategory/>}/>
      <Route path ="/all/category" element={<AllCategory/>}/>
      </Routes>

    //</BrowserRouter>
  );
}

export default App;
