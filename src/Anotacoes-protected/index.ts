export class Empresa {
    public readonly nome: string
    protected readonly colaboradores: Colaborador[] = []
    protected readonly cnpj:string 

    constructor(nome:string, cnpj:string){
        this.nome = nome
        this.cnpj = cnpj
    }

    addColab(colaboradores: Colaborador){
        this.colaboradores.push(colaboradores)
    }

    viewColab(){
        for(const colab of this.colaboradores){
            console.log(colab)
        }
    }

}

export class Udemy extends Empresa{
    constructor(){
        super('Udemy', '44.333.222/1111-11')
    }

    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop()
        if(colaborador) return colaborador
        return null
    }
}


export class Colaborador{
    constructor(public readonly nome:string, public readonly sobrenome:string){}
}


const empresa = new Empresa('Udemy', '44.333.222/1111-11')

const junin = new Colaborador('junin', 'bala')
const cremoso = new Colaborador('cremoso', 'Chefin')
const caixa = new Colaborador('caixa', 'de Sexo')
const pandora = new Colaborador('Pandora', 'O baffo q mata')

empresa.addColab(junin)
empresa.addColab(cremoso)
empresa.addColab(caixa)
empresa.addColab(pandora)

empresa.viewColab()
console.log("oi")