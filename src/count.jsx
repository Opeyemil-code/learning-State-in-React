import React from "react";

export default function Count(props) {
    console.log('count component rendered')
    return(
        <div className="counter--count">
                <h1 className='bg-white p-20 rounded-full text-6xl font-bold'>{props.number}</h1>
            </div>
           
    )   
}