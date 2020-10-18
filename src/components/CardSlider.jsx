import React, {useEffect} from 'react';
import Swiper from "swiper";
import 'swiper/swiper-bundle.min.css';
import './CardSlider.scss'


function CardSlider({data, name}) {

    useEffect(() => {
        new Swiper(`#slider`, {
            direction: 'horizontal',
            slidePerView: 1,
            spaceBetween: 5,
            loop: false,
            preloadImages: false,
            rebuildOnUpdate: true,

            breakpoints: {
                200: {
                    slidesPerView: 1.1,
                },
                320: {
                    slidesPerView: 2.3,
                    spaceBetween: 5,
                },
                380: {
                    slidesPerView: 3.2,
                    spaceBetween: 5,
                },
                530: {
                    slidesPerView: 4.2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 5.2,
                    spaceBetween: 5,
                },
                1024: {
                    slidesPerView: 7.3,
                    spaceBetween: 7,
                },
            },
        })

    }, [])
    return (
        <>
            <div className={'home-slider-category-name'}>{name}</div>
            <div className="swiper-container" id={'slider'}>
                <div className="swiper-wrapper">
                    {
                        data.map((item) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <div  className="swiper-slide ">
                                            <div className="swiper-slide-hover">
                                                <div>{item.productDate}</div>
                                                <div>{item.videoName}</div>
                                            </div>
                                            <img src={item.thumbNail} alt=""/>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        )


                    }
                </div>
            </div>
        </>
    );
}

export default CardSlider;