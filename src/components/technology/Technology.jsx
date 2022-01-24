import React, { useEffect } from 'react';
import './technology.scss'
function Technology() {
    useEffect(() => {
        document.body.classList.add("bg-technology");
        return () => {
            document.body.classList.remove("bg-technology");
        };
    }, []);
    return <div>Technoloy</div>;
}

export default Technology;
