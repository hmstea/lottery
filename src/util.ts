
function getRandomInt(min= 1 , max = 45) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function makeNumber() {

    let numbers: number[] = [];
    let number: number = 0;
    do {
        number = getRandomInt();

        if(!numbers.includes(number)){
            numbers.push(number);
        }
    }
    while(numbers.length < 7);

    return numbers;
}