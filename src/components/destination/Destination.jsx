import React, { useEffect } from 'react';
import './destination.scss'
function Destination() {
    useEffect(() => {
        document.body.classList.add("bg-destination");
        return () => {
            document.body.classList.remove("bg-destination");
        };
    }, []);
    return <div className='destination'>
        destination
    </div>;
}

export default Destination;
