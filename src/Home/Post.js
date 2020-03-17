import React from 'react';

export const Post = ({title,body,user,id,style}) => (
    <><div style={style}>
        {`[Id: ${id}] 
         [User: ${user}]
         [Title: ${title}]
         [Body:${body}]`}
    </div>
    </>
);