import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Parallax, Pagination, Navigation
} from 'swiper';

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import './destination.scss'

import data from '../../config/data.json';

// const SildeItem = () => {
//     return (

//     )
// }

const HeroSilde = () => {


    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(data.destinations);
        const itemSlidesInDOM = document.querySelectorAll(".swiper-pagination-bullet");
        const itemSlideArray = Array.from(itemSlidesInDOM);
        slides.map((item, index) => itemSlideArray[index].innerHTML = item.name)
    })

    SwiperCore.use([Parallax, Pagination, Navigation]);
    return (
        <div className="hero-slide">
            <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                speed={240}
                parallax={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                className="mySwiper">
                {/* <div slot="container-start" className="parallax-bg" style={{ 'backgroundImage': 'url()' }} data-swiper-parallax="-23%"></div> */}

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
            </Swiper>

        </div>
    );
}



function Destination() {

    useEffect(() => {

        document.body.classList.add("bg-destination");
        return () => {

            document.body.classList.remove("bg-destination");
        };
    }, []);
    return (
        <div className='destination'>
            <h5 className='pharse'>
                <span>01</span> Pick Your Destination</h5>
            <HeroSilde />

        </div>
    )
}

export default Destination; 
