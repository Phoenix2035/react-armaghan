import React, {useEffect} from 'react';
import styled from 'styled-components';
import logo from '../../../../img/armaghan-logo.svg'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 20;
  text-align:right;
  padding:.5rem;
  
  li {
    padding:  1rem;
  }
  
  @media (min-width: 992px) {
    display:none;
  }

  @media (max-width: 992px) {
    width: 30rem;
    height: 100vh;
    flex-flow: column nowrap;
    background-color: #485461;
    background-image: linear-gradient(315deg,#485461,#28313b 74%);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    padding-top: 5.5rem;    
    transition: transform 0.3s ease-in-out;
    

    li {
      padding: 2rem .5rem 1rem 0;
      cursor: pointer;
      display:flex;
      align-items:center;
      margin-right: 1rem;
      

      a {
        width:100%;
        color: #fff;
        font-size: 1.7rem;
        font-family: shabnam,sans-serif;
        display:flex;
        align-items: center;
        
      
   
        &:after{
        display:none
        }   
    }
       i{
         font-size: 2rem;
         color: #ffffff;
         margin-left: 1rem;     
   }
   }
  }
`;

const SideNav = ({open}) => {



    const style = {
        width: '85px',
        height: '85px',
        position: 'absolute',
        top: '-1.7rem',
        right: '1.8rem',
        cursor: 'pointer',
    }
    return (
        <Ul  open={open}>

            <img className={'logo'} src={logo} alt="logo" style={style}/>

            <li>
                <i className="fas fa-sign-in-alt"/>
                <a href="#">ورود</a>
            </li>

            <li>
                <i className="fas fa-home"/>
                <a href="#">خانه</a>
            </li>

            <li>
                <i className="fas fa-video"/>
                <a href="#">فیلم</a>
            </li>

            <li>
                <i className="fas fa-film"/>
                <a href="#">سریال</a>
            </li>

            <li>
                <i className="fas fa-ticket-alt"/>
                <a href="#">سینما</a>
            </li>

            <li>
                <i className="fas fa-photo-video"/>
                <a href="#">پخش زنده</a>
            </li>

            <li>
                <i className="fas fa-list"/>
                <a href="#">دسته بندی</a>
            </li>

            <li>
                <i className="fas fa-newspaper"/>
                <a href="#">آموزشی</a>
            </li>

            <li>
                <i className="fas fa-child"/>
                <a href="#">کودکان</a>
            </li>


        </Ul>
    )
}

export default SideNav
