import React from 'react';

export const Character =  ({source, name, id, alt, onClick}) => (
    <div onClick={onClick} >
        <img key={id}
        src={source}
        alt={alt}/>
        <p>{name}</p>
    </div>
)