enum Cores {
    VERMELHO = 10,
    AZUL = 1,
    AMARELO = 32
}

console.log(Cores.VERMELHO)
console.log(Cores[1])

export function escolhaCor(cor:Cores):void{
    console.log(Cores[cor])
}

escolhaCor(32)

export default 1