import React from 'react';
import Header from "./components/Header/Header";
import SliderHorizontal from "./components/SliderHorizontal";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Switch} from "react-router-dom";

const App = () => {
    return (

        <BrowserRouter>
            <Header/>
            <SliderHorizontal/>
            <Footer/>

        </BrowserRouter>
    );
}

export default App;
