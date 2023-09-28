"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = void 0;
const pessoa = {
    idade: 20,
    salario: 200000,
    nome: "Lorem"
};
function setCorPreferida(pessoa, cor) {
    return Object.assign(Object.assign({}, pessoa), { corPreferida: cor });
}
exports.setCorPreferida = setCorPreferida;
console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
exports.default = 1;
//# sourceMappingURL=index.js.map