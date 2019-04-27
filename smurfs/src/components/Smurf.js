import React from 'react';

export const Smurf = ({smurf}) => {
    return (
        <div className="smurf">
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    );
}

export default Smurf;