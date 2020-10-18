import React, {useEffect} from "react"
// import Styled from "styled-components"
import Swiper, {Pagination} from "swiper"
import 'swiper/swiper-bundle.min.css';
import './HomeMainSlider.scss'
import img1 from '../../../img/1.jpg'
import img2 from '../../../img/2.jpg'
import img3 from '../../../img/3.jpg'
import img4 from '../../../img/4.jpg'

// const SwiperItem = Styled.div`
//         background-image :
//          linear-gradient(rgba(18, 18, 18, 0) 10vw,
//           rgb(18, 18, 18) 100%),
//            linear-gradient(to left,
//             rgba(18, 18, 18, 0.7),
//              rgba(18, 18, 18, 0) 50%) ,
//               url(${props => props.img1});
//         background-size : cover ;
//         padding : 4em;
//         background-repeat:no-repeat;
//         background-position : center top;
//
//         @media only screen and (max-width : 500px){
//                   background-image :
//          linear-gradient(rgba(18, 18, 18, 0) 10vw,
//           rgb(18, 18, 18) 100%),
//            linear-gradient(to left,
//             rgba(18, 18, 18, 0.7),
//              rgba(18, 18, 18, 0) 50%) ,
//              url(${props => props.img2});
//              background-size: cover;
//              background-repeat:no-repeat;
//         }
//     `

Swiper.use([Pagination]);


function HomeMainSlider() {
    useEffect(() => {
        let swiperSlider = new Swiper('#main_slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 600,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            preloadImages: true,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        })

        return () => {
            swiperSlider.destroy()
        }
    })


    return (
        <div className="swiper-container main-slider" id={'main_slider'}>
            <div className="swiper-wrapper">
                <div className="swiper-slide main-slider-item">
                    <img src={img1} alt="img"/>
                </div>

                <div className="swiper-slide main-slider-item">
                    <img src={img2} alt="img"/>
                </div>
                <div className="swiper-slide main-slider-item">
                    <img src={img3} alt="img"/>
                </div>

                <div className="swiper-slide main-slider-item">
                    <img src={img4} alt="img"/>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>


    )
}

export default HomeMainSlider;