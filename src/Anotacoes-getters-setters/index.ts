export class Pessoa {
    constructor(private nome:string, private sobrenome:string, private idade:number, private _cpf:string) {}

    set cpf(cpf:string){
        this._cpf = cpf
    }

    get cpf():string{
        return this._cpf
    }
    
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00')

console.log(pessoa.cpf)

// export class Aluno extends Pessoa{
//     constructor(nome:string,sobrenome:string,idade:number,cpf:string){
//         super(nome,sobrenome,idade,cpf)
//     }
// }
// export class Client extends Pessoa{}