import React, {createElement, MouseEventHandler, ReactNode, useRef, useState} from 'react';
import { makeNumber} from "./util";
import Game from "./Game";
import UseColors from "./useColors";
import { toPng } from 'html-to-image';

function App() {
    const el = useRef<HTMLDivElement>(null);
    const [count, setCount]= useState<number>(5)
    const [games, setGames] = useState<ReactNode[]>();

    const allColor = UseColors();
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

    const saveHandler: MouseEventHandler = () => {
        if(el.current == null) return;
        const name:string = new Date().toLocaleString().replace(/ /g,'');
        toPng(el.current).then((dataUrl) => {
            const link = document.createElement('a');
            link.download = `hms-${name}.png`
            link.href = dataUrl;
            link.click();
        }) .catch((err) => {
            console.log(err)
        });
    }
    return (
        <div className='max-w-fit min-w-[350px]'  >
            <div className='flex justify-between mb-4 px-3 '>
                {[1,2,3,4,5].map(i=>{
                    return <label key={i} className='font-bold text-xl'>
                        <input type='radio' className='mr-2'
                               onClick={(e)=>{
                                   setCount(Number(e.currentTarget.value));
                               }}
                               name='num' id={`radio${i}`} value={i}  defaultChecked={i == count} />
                        {i}
                    </label>
                })}
                {/*<input
                    onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                        const value: string = e.currentTarget.value;
                        const num: number = Number(value.slice(-1));
                        if(num > 0 && num < 6){
                            setCount(num);
                        }
                    }}
                    value={count} />*/}
                <button onClick={handler} className='rounded-md px-4 py-2 border-0 bg-red-700 text-pink-100'>RUN</button>
            </div>
            <div className='flex-col p-0' ref={el}>
                {games}
            </div>
            {games &&
                (<div className='text-center mt-10'>
                    <button onClick={saveHandler} className='rounded-md px-4 py-2 border-0 bg-gray-700 text-pink-100'>SAVE</button>
                </div>)}

        </div>
    );
}

export default App;