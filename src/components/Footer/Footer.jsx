import React from 'react';
import {Link} from "react-router-dom";
import Styled from 'styled-components'
import './Footer.scss'

const FooterElement = Styled.footer`
    width: 100%;
    background: #171717;
    padding : .7em 0;
    color: white;
    margin-top : 3em;
    font-size: .75em;
    transform: translateY(12rem);
      @media only screen and (max-width : 480px){
        padding : 1em 1rem
      }
`

const FooterItem = Styled.li`
    display : inline-block ;
    margin : 0 1rem;
    color : darkgray;
    line-height : 2.5em;
      @media only screen and (max-width : 380px){
          width:100%;
          display:block;
          text-align: center;
          padding: .5rem 0;
          margin : 0 ;
         }
`
const scrollTop = () => {
    let current = document.documentElement.scrollTop;
    let scroll = setInterval(() => {
        window.scrollTo(0, current -= 30)
        if (current < 1) {
            clearInterval(scroll);
        }
    }, 5)
}


const Footer = () => {
    return (
        <FooterElement>
            <ul className='m-0 text-center'>
                <FooterItem style={{fontSize: '1.5em'}} className='px-3' onClick={scrollTop}>
                    <i onClick={scrollTop} className={'fas fa-arrow-up'}/>
                </FooterItem>

                <FooterItem>
                    <Link to='/terms-and-conditions' className='text-white'>
                        قوانین سایت
                    </Link>
                </FooterItem>
                <FooterItem>
                     <span>
                 ایمیل
                  :   info@armaghan.net
                </span>
                </FooterItem>
                <FooterItem>
                     <span>
                   تلفن
                   : 43431000-021
                </span>
                </FooterItem>
                <FooterItem>
                    <span>
                        کد پستی
                        : 1435855961
                    </span>
                </FooterItem>
                <FooterItem>
                    <span>
                        آدرس
                       :  میدان ونک خیابان ملاصدرا خیابان شیخ بهایی جنوبی کوچه مفتاح ، پلاک ۲۷
                    </span>
                </FooterItem>

            </ul>
        </FooterElement>
    )
}


export default Footer;




