export class empresas {
    public readonly nome: string
    private readonly colaboradores: Colaborador[] = []
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

    public getNome(): string{
        return this.nome
    }

    getColab():Colaborador[]{
        return this.colaboradores
    }
}


export class Colaborador{
    constructor(public readonly nome:string, public readonly sobrenome:string){}
}


const empresa = new empresas('Fábrica LowStyle', '44.333.222/1111-11')

const junin = new Colaborador('junin', 'bala')
const cremoso = new Colaborador('cremoso', 'Chefin')
const caixa = new Colaborador('caixa', 'de Sexo')
const pandora = new Colaborador('Pandora', 'O baffo q mata')

empresa.addColab(junin)
empresa.addColab(cremoso)
empresa.addColab(caixa)
empresa.addColab(pandora)

empresa.viewColab()
console.log(empresa.getColab())