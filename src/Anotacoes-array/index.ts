function multiplicarArgs(...args: Array<number>): number{
    return args.reduce((ac, valor) => ac*valor , 1)
}

function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor)
}

function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase())
}

console.log(multiplicarArgs(9,9))

console.log(concatenaString('9','9', 'a','b', 'c'))

console.log(toUpperCase('a','b', 'c'))