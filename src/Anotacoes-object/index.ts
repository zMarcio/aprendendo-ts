const objA = {
    chaveA : 'valorA',
    chaveB : 'valorB'
}


const objB: {
    chaveA : string;
    chaveB : string;
    chaveC? : string;
    [key: string]: unknown
} = {
    chaveA : 'valorA',
    chaveB : 'valorB'
}

// objA.chaveA = 'Outro valor';

objB.chaveD = 'foda-se'

console.log(objB)
