//falou sobre arrow function com this. Arrow function usa this do escopo global

export function funcao(this:Date, nome:string, agr:number): void{
    console.log(this)
    console.log(nome,agr)
}
//  // assim não da para fazer pois precisa referencia o this
// funcao("oi",32)
// // desses dois jeitos da para fazer, pois da certo referencia o THIS
funcao.call(new Date(), 'duardo', 30)
funcao.apply(new Date(), ['duardo', 30])