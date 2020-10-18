import React from 'react';
import logo from '../../../img/armaghan-logo.svg'
import {Link} from "react-router-dom";
import './Menu.scss'
import Burger from "./Burger/Burger";

function Menu() {
    return (
        <>
            <nav className={'Menu'}>
                <Link className={'Menu-logo'} to={'http://armaghan.tv/'}>
                    <img src={logo} alt="logo"/>
                </Link>

                <ul className={'Menu-navbar'}>
                    <li>
                        <Link to={'/خانه'}>خانه</Link>
                    </li>

                    <li>
                        <Link to={'/فیلم'}>فیلم</Link>
                    </li>

                    <li>
                        <Link to={'/سریال'}>سریال</Link>
                    </li>

                    <li>
                        <Link to={'/سینما'}>سینما</Link>
                    </li>

                    <li>
                        <Link to={'/پخش زنده'}>پخش زنده</Link>
                    </li>

                    <li>
                        <Link to={'/دسته بندی'}>دسته بندی</Link>
                    </li>

                    <li>
                        <Link to={'/آموزشی'}>آموزشی</Link>
                    </li>

                    <li>
                        <Link to={'/کودکان'}>کودکان</Link>
                    </li>
                </ul>

                <div className={'Menu-user'}>
                    <button>
                        <Link to={'/'}>خرید اشتراک</Link>
                    </button>
                    <i className='fas fa-search'>
                        <Link to={'/'}/>
                    </i>
                    <i className='fas fa-user-circle'/>
                </div>
            </nav>
            <Burger/>
        </>
    );
}

export default Menu;