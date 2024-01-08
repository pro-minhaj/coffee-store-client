import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../Compnents/Header/Header";
import Footer from "../Compnents/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;