import React, {ChangeEvent, MouseEventHandler, ReactNode, useEffect, useState} from 'react';
import {getColors, makeNumber} from "./util";
import Game from "./Game";

function App() {
    const [allColor, setAllColor] = useState<string[]>([]);
    const [count, setCount]= useState<number>(5)
    const [games, setGames] = useState<ReactNode[]>();

    useEffect(()=>{
       setAllColor(getColors(45));
    },[]);
    if(allColor.length == 0) return <></>;

    const handler: MouseEventHandler = () => {
        const nodes:ReactNode[] = []
        let i:number = 0;

        do {
            const [numbers, colors] = makeNumber(allColor);
            nodes.push(<Game key={i} game={i} colors={colors} numbers={numbers}/>);
            i++;
        }
        while(i < count);
        setGames(nodes);
    }
    return (
        <div className='w-full h-full' >
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                    const value: string = e.currentTarget.value;
                    const num: number = Number(value.slice(-1));
                    if(num > 0 && num < 6){
                        setCount(num);
                    }
                }}
                value={count} />
            <button onClick={handler}>RUN!!!</button>
            <div className='flex-col p-0'>
                {games}
            </div>
        </div>
    );
}

export default App;