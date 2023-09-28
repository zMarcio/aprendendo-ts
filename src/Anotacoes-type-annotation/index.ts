const nome:string = "rapaz"

let array: Array<number> = [1,23,4,5,65,43]


console.log(array)

let opa : string[] = ["foda-se" , 'suamae']

console.log(opa)


let pessoas : { nome: string, idade:number, adulto?: boolean} = {
    nome:"jubileu",
    idade: 13,
    adulto: false
}


console.log(pessoas.nome)


function soma(x:number, y:number){
    return x + y
}

const corno = soma(1,2)

console.log(soma(99,1))