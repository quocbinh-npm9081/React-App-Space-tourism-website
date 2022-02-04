import React, { useState, useEffect } from 'react';
import './crew.scss'


import data from '../../config/data.json';
import HeroSlide from '../heroSlide/HeroSlide';
function Crew() {
    useEffect(() => {
        document.body.classList.add("bg-crew");
        return () => {
            document.body.classList.remove("bg-crew");
        };
    }, []);
    return (
        <div>
            <div className='crew'>
                <h5 className='pharse'>
                    <span>02</span> meet your crew
                </h5>
                <HeroSlide data={data.crew} page="crew" />
            </div>
        </div>
    )
}

export default Crew;
