import React from 'react';

export const Character =  ({source, name, id, alt, onClick}) => (
    <div onClick={onClick} style={{ cursor: 'pointer'}} >
        <img key={id}
        src={source}
        alt={alt}/>
        <p>{name}</p>
    </div>
)