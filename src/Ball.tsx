import React from 'react';

type Props = {
    color: string;
    num: number;
}
function Ball({color, num}:Props) {
    return (
        <div key={num} className={`rounded-full w-[100px] h-[100px] flex items-center justify-center `} style={{backgroundColor: color}}>
            <span className='text-5xl font-bold m-0 p-0'>{num}</span>
        </div>
    );
}

export default Ball;