import React from 'react';

type Props = {
    color: string;
    num: number;
}
function Ball({color, num}:Props) {
    return (
        <div key={num} className={`rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-ms `} style={{backgroundColor: color}}>
            <span className='text-2xl font-bold m-0 p-0'>{num}</span>
        </div>
    );
}

export default Ball;