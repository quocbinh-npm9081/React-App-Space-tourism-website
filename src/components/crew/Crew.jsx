import React, { useEffect } from 'react';
import './crew.scss'
function Crew() {
    useEffect(() => {
        document.body.classList.add("bg-crew");
        return () => {
            document.body.classList.remove("bg-crew");
        };
    }, []);
    return <div>Crew</div>;
}

export default Crew;
