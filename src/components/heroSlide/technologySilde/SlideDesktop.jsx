import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
const Slidedesktop = ({ slides }) => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="image">
                                <img src={item.images.portrait} alt="" />
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
            </Swiper>
        </>
    );
}

export default Slidedesktop;
