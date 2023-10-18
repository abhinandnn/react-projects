import React from 'react';

function Card(props)
{
    return(
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{props.name1}</h2>
                <img
                className='imgg'
                src={props.img}
                alt='profile_img'
                />
            </div>
            <div className='bottom'>
                <p className='det'>{props.tel}</p>
                <p className='det'>{props.college}</p>
            </div>
        </div>
    );
}
export default Card;
