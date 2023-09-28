type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string  }
type TemIdade = { idade: number }
type Pessoa = TemIdade & TemNome & TemSobrenome

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type AF = 'A' | 'F'
type intersecao = AB & AC & AD & AF

const pessoa: Pessoa ={
    idade: 20,
    nome: 'Cachorrão',
    sobrenome: 'Junior'
}

console.log(pessoa)

export default 1  