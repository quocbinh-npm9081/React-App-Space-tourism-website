import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Parallax, Pagination, Navigation
} from 'swiper';

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import Slidedesktop from './technologySilde/SlideDesktop';
const HeroSilde = ({ data, page }) => {
    SwiperCore.use([Parallax, Pagination, Navigation]);


    const [slides, setSlides] = useState([]);

    const [portrait, setPortrait] = useState(false);

    const desktopResizeTechnologyPage = () => {

        if (window.innerWidth >= 1023) {
            setPortrait(true)
        } else {
            setPortrait(false)
        }

    }
    // console.log(portrait);
    useEffect(() => {
        setSlides(data);
        if (page === 'destination') {
            const itemSlidesInDOM = document.querySelectorAll(".swiper-pagination-bullet");
            const itemSlideArray = Array.from(itemSlidesInDOM);
            slides.map((item, index) => itemSlideArray[index].innerHTML = item.name)
        }

        if (page === 'technology') {
            const itemSlidesInDOM = document.querySelectorAll(".swiper-pagination-bullet");
            const itemSlideArray = Array.from(itemSlidesInDOM);
            slides.map((item, index) => itemSlideArray[index].innerHTML = ++index)
        }
        if (window.innerWidth >= 1023) {
            setPortrait(true)
        } else {
            setPortrait(false)
        }
        window.addEventListener('resize', desktopResizeTechnologyPage);
        return () => {
            window.removeEventListener('rezise', desktopResizeTechnologyPage);
        }

    })




    const renderSilde = (actualPage) => {
        switch (actualPage) {
            case "destination":
                return (
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
                    </Swiper>
                )
                break;
            case "crew":
                return (
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
                break;
            case "technology":
                return (

                    portrait === false ? <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                        speed={240}
                        parallax={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={true}
                        className="mySwiper">
                        {
                            slides.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="image">
                                        <img src={item.images.landscape} alt="" />
                                    </div>
                                    <div className="technology_content">
                                        <h3 className="terminology" data-swiper-parallax="-300">The terminology...</h3>
                                        <h1 className="title" data-swiper-parallax="-300">{item.name}</h1>
                                        <div className="text" data-swiper-parallax="-100">
                                            <p className='description'>{item.description}</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper> :
                        <Slidedesktop slides={slides} />

                )
            default:
                return null;
                break;
        }
    }
    return (
        <div className="hero-slide">
            {
                renderSilde(page)
            }
        </div>
    );
}


export default HeroSilde;