import React from 'react';
import './homePage.scss';
import { Link } from 'react-router-dom';
function HomePage() {

    return (

        <div className='homePage'>
            <div className="content">
                <h5 className='pharse'>So, you want to travel to</h5>
                <h1 className='title'>Space</h1>
                <p className="description">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
            </div>
            <Link to="/destination" className='btn-explore'>
                explore
            </Link>
        </div>
    )

}

export default HomePage;
