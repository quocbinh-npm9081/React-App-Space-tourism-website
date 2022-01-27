import React, { useEffect } from 'react';

import './destination.scss'

import data from '../../config/data.json';
import HeroSilde from '../heroSlide/HeroSlide';


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
            <HeroSilde data={data.destinations} page="destination" />

        </div>
    )
}

export default Destination; 
