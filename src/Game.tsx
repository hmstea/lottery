import React, {ReactNode, useEffect, useState} from 'react';
import Ball from "./Ball";


function getRandomLightColor(): string {
    let r: number = 150 + Math.round(100 * Math.random());
    let g: number = 150 + Math.round(100 * Math.random());
    let b: number = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
}


function Game({game, numbers}:{game:number; numbers:number[]}) {
    console.log(numbers)
    return (
        <section className='w-full h-full flex gap-1 p-2'>
            {numbers.map(number=> <Ball key = {`${game}_${number}`} num={number} color={getRandomLightColor()}/>)}
        </section>
    );
}

export default Game;