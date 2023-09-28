"use strict";
function semRetorno(...args) {
    console.log(args.join(' '));
}
semRetorno('foda-se', 'aleluia', '4123');
const pessoa = {
    nome: "fod",
    sobrenome: 'a-se',
    exibirNome() {
        console.log(this.nome + "" + this.sobrenome);
    }
};
// console.log("isso aqui é o undefined? " + pessoa.exibirNome())
//# sourceMappingURL=index.js.map