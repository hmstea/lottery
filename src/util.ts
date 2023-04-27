export function getColors(total: number):string[] {
    const colors:string[] = [];
    for(let i =0 ; i < total; i++){
        let r1=0,g1=0,b1=0;

        if(i < 11) {
            r1 = 240; g1=220; b1=50;
        }
        else if( i< 21) {
            r1 = 50; g1=50; b1=225;
        }
        else if( i< 31) {
            r1 = 240; g1=50; b1=50;
        }
        else if( i< 41) {
            r1 = 122; g1=122; b1=122;
        }
        else if( i< 51) {
            r1 = 50; g1=225; b1=50;
        }

        colors.push(getRandomLightColor(r1, g1, b1));
    }
    return colors
}

function getRandomLightColor(r1:number, g1:number, b1:number): string {
    let r: number = r1 == 0 ? getRandomInt(80,256) : r1 - getRandomInt(0,10);
    let g: number = g1 == 0 ? getRandomInt(80,256) : g1 - getRandomInt(0,10);
    let b: number = b1 == 0 ? getRandomInt(80,256) : b1 - getRandomInt(0,10);
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

