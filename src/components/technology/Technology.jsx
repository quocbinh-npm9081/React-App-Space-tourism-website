import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Pagination } from "swiper";

// // import required modules
// import "swiper/css";
// import "swiper/css/pagination";
import './technology.scss'
import HeroSilde from '../heroSlide/HeroSlide';
import data from '../../config/data.json';

function Technology() {
    const [slideList, setSlideList] = useState([]);
    useEffect(() => {
        document.body.classList.add("bg-technology");
        setSlideList(data.technology)
        return () => {
            document.body.classList.remove("bg-technology");
        };
    }, []);
    console.log(slideList)
    return (
        <div className='technology'>
            <h5 className='pharse'>
                <span>03</span>space lauch 101
            </h5>
            <HeroSilde data={data.technology} page="technology" />

        </div>
    )
}

export default Technology;
