import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Parallax, Pagination, Navigation
} from 'swiper';

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

const HeroSilde = ({ data, page }) => {


    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(data);
        if (page === 'destination') {
            const itemSlidesInDOM = document.querySelectorAll(".swiper-pagination-bullet");
            const itemSlideArray = Array.from(itemSlidesInDOM);
            slides.map((item, index) => itemSlideArray[index].innerHTML = item.name)
        }
    })

    SwiperCore.use([Parallax, Pagination, Navigation]);
    return (
        <div className="hero-slide">
            {
                page === 'destination' ? (
                    <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                        speed={240}
                        parallax={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={true}
                        className="mySwiper">
                        {
                            slides.map((sildeItem, index) => (
                                <SwiperSlide key={index}>
                                    <div className='image'>
                                        <img src={sildeItem.images.png} alt="" />
                                    </div>
                                    <div className="destination__content">
                                        <h1 className="title" data-swiper-parallax="-300">{sildeItem.name}</h1>
                                        <div className="text" data-swiper-parallax="-100">
                                            <p className='description'>{sildeItem.description}</p>
                                            <div className='lineBottom'>

                                            </div>
                                        </div>
                                        <div className='destination__info'>
                                            <div className="avg" >
                                                <h5>avg. distance</h5>
                                                <h4>{sildeItem.distance}</h4>
                                            </div>
                                            <div className="est" >
                                                <h5>est. travel time</h5>
                                                <h4>{sildeItem.travel}</h4>
                                            </div>
                                        </div>

                                    </div>


                                </SwiperSlide>
                            ))
                        }
                    </Swiper>) : (
                    <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                        speed={240}
                        parallax={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={true}
                        className="mySwiper">

                        {
                            slides.map((sildeItem, index) => (
                                <SwiperSlide key={index}>
                                    <div className='image'>
                                        <img src={sildeItem.images.webp} alt="" />

                                    </div>
                                    <div className='lineBottom'>

                                    </div>
                                    <div className="crew__content">
                                        <h1 className="role" data-swiper-parallax="-300">{sildeItem.role}</h1>

                                        <h1 className="title" data-swiper-parallax="-300">{sildeItem.name}</h1>
                                        <div className="text" data-swiper-parallax="-100">
                                            <p className='description'>{sildeItem.bio}</p>

                                        </div>


                                    </div>


                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }


        </div>
    );
}


export default HeroSilde;