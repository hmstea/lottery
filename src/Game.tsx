import Ball from "./Ball";

function Game({game, numbers, colors}:{game:number; numbers:number[], colors:string[]}) {
    return (
        <section className='flex gap-1 p-2 justify-between'>
            {numbers.map((number, i)=>{
              return  <Ball key = {`${game}_${number}`} num={number} color={colors[i]}/>;
            })}
        </section>
    );
}

export default Game;