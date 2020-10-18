import React from 'react';
import './Header.scss'
import Menu from "./Menu/Menu";
import HomeMainSlider from "./HomeMainSlider/HomeMainSlider";


function Header(props) {
    return (
        <header className={'Header'}>
            <Menu/>
            <HomeMainSlider/>
        </header>
    );
}

export default Header;