import React from 'react';

export const Character =  ({source, name, id, alt, onClick}) => (
    <div onClick={onClick} className='Image'>
        <img key={id}
        src={source}
        alt={alt}/>
        <p>{name}</p>

    </div>
)