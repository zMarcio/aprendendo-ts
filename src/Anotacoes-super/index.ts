export class Pessoa {
    constructor(public nome:string, public sobrenome:string, private idade:number, protected cpf:string) {}


    getIdade():number{
        return this.idade
    }

    getCpf():string{
        return this.cpf
    }

    getNomeCompleto():string{
        return this.nome + ' ' +this.sobrenome
    }
}


export class Aluno extends Pessoa{
    constructor(nome:string,sobrenome:string,idade:number,cpf:string){
        super(nome,sobrenome,idade,cpf)
    }
}
export class Client extends Pessoa{}