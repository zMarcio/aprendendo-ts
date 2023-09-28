type Idade = number
type Pessoa = {
    nome: string
    idade:Idade
    salario:number
    corPreferida?:string
}

type corRGB = 'Vermelho' | 'Verde' | 'Azul'
type corCMYK = "Ciano" | 'Magenta' | 'Amarelo' | 'Preto'
type corPreferida = corCMYK | corRGB

const pessoa: Pessoa = {
    idade:20,
    salario:200000,
    nome:"Lorem"
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida):Pessoa{
    return { ...pessoa, corPreferida:cor}
}

console.log(setCorPreferida(pessoa, 'Azul'))
console.log(pessoa)

export default 1