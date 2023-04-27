import Ball from "./Ball";

function Game({game, numbers, colors}:{game:number; numbers:number[], colors:string[]}) {
    return (
        <section className='w-full h-full flex gap-1 p-2'>
            {numbers.map((number, i)=>{
              return  <Ball key = {`${game}_${number}`} num={number} color={colors[i]}/>;
            })}
        </section>
    );
}

export default Game;