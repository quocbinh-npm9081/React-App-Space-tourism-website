import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../components/homePage/HomePage';
import Destination from '../../components/destination/Destination';
import Crew from '../../components/crew/Crew';
import Technology from '../../components/technology/Technology';
const Routes_S = () => {
    return (
        <Routes>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/crew" element={<Crew />}></Route>
            <Route path="/technology" element={<Technology />}></Route>
            {/* <Route path="/" element={<HomePage />}></Route> */}
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    )

};

export default Routes_S;
