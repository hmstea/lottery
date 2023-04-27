export function getColors(total: number):string[] {
    const colors:string[] = [];
    for(let i =0 ; i < total; i++){
        colors.push(getRandomLightColor());
    }
    return colors
}

function getRandomLightColor(): string {
    let r: number = getRandomInt(80,256);
    let g: number = getRandomInt(80,256);
    let b: number = getRandomInt(80,256);
    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomInt(min= 1 , max = 46) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export type NumberInfo =  [number[], string[]];

export function makeNumber(allColor:string[]):NumberInfo {

    let colors: string[] = [];
    let numbers: number[] = [];
    let number: number = 0;
    do {
        number = getRandomInt();

        if(!numbers.includes(number)){
            numbers.push(number);

        }
    }
    while(numbers.length < 7);

    numbers.sort((a, b) => a-b);
    numbers.map((r) => {
        colors.push(allColor[r-1]);
    });

    return [numbers, colors];
}

