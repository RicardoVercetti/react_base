import React from 'react';
const Planets = (props) => {
    return (
        props.isGasPlanet && <h1>{props.name}</h1>
    );
}

export default Planets;